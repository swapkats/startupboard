'use strict';

module.exports = function(app) {
    
    // Home route
    var index = require('../controllers/index');
    var boards = require('../controllers/boards');
    app.get('/', index.render, boards.all);
    app.get('/job/:jobid', index.render, boards.all);

};
