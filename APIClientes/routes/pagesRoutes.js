// Controller
const pagesController = require('../controllers/pagesController');

module.exports = (app) => {
  app.get('/', pagesController.homePageView);
}