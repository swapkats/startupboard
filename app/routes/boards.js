'use strict';

// boards routes use boards controller
var boards = require('../controllers/boards');
var authorization = require('./middlewares/authorization');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.article.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/board', boards.all);
    app.post('/board', authorization.requiresLogin, boards.create);
    app.get('/board/:articleId', boards.show);
    app.get('/board/:articleId', boards.show);
    app.put('/board/:articleId', authorization.requiresLogin, hasAuthorization, boards.update);
    app.del('/board/:articleId', authorization.requiresLogin, hasAuthorization, boards.destroy);

    // Finish with setting up the articleId param
    app.param('articleId', boards.article);

};