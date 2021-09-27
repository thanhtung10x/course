//inport file ewsRoutes.js
const newsRouter = require('./newsRoutes');
const sitesRouter = require('./sitesRoutes');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/', sitesRouter);
}

module.exports = route;
