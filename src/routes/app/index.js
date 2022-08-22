const express = require('express');
const articleRoute = require('./article.route');

const router = express.Router();

const defaultRoutes = [
    {
      path: '/home',
      route: articleRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;