# Lab Exercise 05 — Express.js Routing
Mjd Arow · 101513153

## Run
```bash
npm install
npm start   # http://localhost:8081
```

## Routes
| Method | URL | Result |
|---|---|---|
| GET | `/home` | Serves `home.html` |
| GET | `/api/v1/user/profile` | Returns `user.json` as JSON |
| POST | `/api/v1/user/login` | Body `{"username","password"}` → validation message |
| GET | `/api/v1/user/logout/:username` | `<b>{username} successfully logout.</b>` |
| any | bad request (e.g. malformed JSON) | 500 `Server Error` |

Valid login: `{"username": "bret", "password": "bret@123"}`

## Errors fixed in the starter code
- `index.js` used `router` without creating it.
- Mount path `'api/v1/user'` was missing its leading slash.
- `users.js` never required `express`, and registered routes on `router` instead of `routerUser`.
- `users.js` had to live in `routes/`, since `index.js` requires `./routes/users`.
- No JSON body parser → added `app.use(express.json())`.
- Error handler returned 200 → now returns 500 "Server Error".

## Section B

**6. Purpose of `express.Router()`**
`express.Router()` creates a self-contained mini router with its own routes and middleware. It lets related endpoints live in their own file (all user routes are in `routes/users.js`) and be mounted under one prefix (`/api/v1/user`) with a single `app.use()`. This keeps `index.js` small, groups code by feature, and lets a whole group's base path change in one place.

**7. Error handling in Express**
Pass errors to `next(err)`; Express then skips to the first middleware with four arguments `(err, req, res, next)`, registered after all routes:
```js
routerUser.get('/profile', (req, res, next) => {
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) return next(err); // e.g. file not found
    res.json(JSON.parse(data));
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});
```
Unknown URLs can be handled with `app.use((req, res) => res.status(404).send('Page Not Found'))` after the routes.

## Section C — Bonus
`app.listen(process.env.port || 8081)` listens on the port from the `port` environment variable when it is set, otherwise 8081. Hosting platforms assign the port at runtime through an environment variable, so the app must read it rather than hard-code one; the fallback keeps local development working. (Most platforms use uppercase `PORT`.)
