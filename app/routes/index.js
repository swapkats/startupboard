'use strict';

module.exports = function(app) {
    
    // Home route
    var boards = require('../controllers/boards');
    app.get('/', boards.all);

};
