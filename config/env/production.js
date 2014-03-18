'use strict';

module.exports = {
    db: 'mongodb://localhost/startupBoard',
    app: {
        name: 'Startup Board'
    },
    facebook: {
        clientID: '255103358026116',
        clientSecret: 'c7bbf4d6a2c68b8af0d74e3d1aa1d677',
        callbackURL: 'http://startupboard.in/auth/facebook/callback'
    },
    twitter: {
        clientID: 'oq20JY7VifgmYX523iZFA',
        clientSecret: 'OeWngqKNAwVNZBt8Xq5GECEAaiNp6o24jxxtcZo0',
        callbackURL: 'http://startupboard.in/auth/twitter/callback'
    },
    github: {
        clientID: '97c5b9f2c5dd7ff89104',
        clientSecret: '8b26456294a1a74697718be6ba483e18cb830fa4',
        callbackURL: 'http://startupboard.in/auth/github/callback'
    },
    google: {
        clientID: '897907170490.apps.googleusercontent.com',
        clientSecret: 'SyiQMUM9uMoQVokO8cDpgFMN',
        callbackURL: 'http://startupboard.in/auth/google/callback'
    },
    linkedin: {
        clientID: '75besreex86nrt',
        clientSecret: 'BqMNEC845K5ivSBV',
        callbackURL: 'http://startupboard.in/auth/linkedin/callback'
    }
};
