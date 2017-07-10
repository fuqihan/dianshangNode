module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/users');
  });
  app.use('/users', require('./users'));
  app.use('/shops', require('./shops.js'));
};
