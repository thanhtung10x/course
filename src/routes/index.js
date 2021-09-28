//inport file ewsRoutes.js
const meRouter = require('./meRoutes');
const courseRouter = require('./courseRoutes');
const newsRouter = require('./newsRoutes');
const sitesRouter = require('./sitesRoutes');

function route(app) {
  app.use('/me', meRouter);
  app.use('/courses', courseRouter);
  app.use('/news', newsRouter);
  app.use('/', sitesRouter);
}

module.exports = route;
