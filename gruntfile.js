'use strict';

module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['gruntfile.js', 
                        'server.js', 
                        'app/**/*.js', 
                        'public/js/controllers/*.js', 
                        'public/js/services/*.js', 
                        'public/js/app.js', 
                        'public/js/config.js', 
                        'public/js/directives.js', 
                        'public/js/filters.js', 
                        'public/js/init.js', 
                        'test/**/*.js'],
                tasks: ['concat','uglify'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['public/views/**', 'app/views/**'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['public/css/**'],
                options: {
                    livereload: true
                }
            },
            slim: {
                files: ['public/slim/**'],
                options: {
                    livereload: true
                },
                tasks:['slim']
            },
            sass: {
                files: ['public/sass/**'],
                options: {
                    livereload: true
                },
                tasks:['compass']
            }
        },
        concat: {
            options: {
              separator: ';',
            },
            dist: {
                src: ['public/js/app.js',
                    'public/js/config.js',
                    'public/js/directives.js',
                    'public/js/filters.js',
                    'public/js/controllers/*.js',
                    'public/js/services/*.js',
                    'public/js/init.js'],
              dest: 'public/js/script.js',
            }
        },
        uglify: {
            options: {
              mangle: true
            },
            my_target: {
              files: {
                'public/js/app.min.js': ['public/js/script.js']
              }
            }
        },
        compass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sassDir: 'public/sass',
                    cssDir: 'public/css'
                }
            }
        },
        slim: {
            dist: {
                files: {
                    'public/views/index.html': 'public/slim/index.slim',
                    'public/views/header.html': 'public/slim/header.slim',
                    'public/views/boards/create.html': 'public/slim/boards/create.slim',
                    'public/views/boards/edit.html': 'public/slim/boards/edit.slim',
                    'public/views/boards/list.html': 'public/slim/boards/list.slim',
                    'public/views/boards/view.html': 'public/slim/boards/view.slim',
                }
            }
        },
        jshint: {
            all: {
                src: ['gruntfile.js', 'server.js', 'app/**/*.js', 'public/js/**', 'test/**/*.js', '!test/coverage/**/*.js'],
                options: {
                    jshintrc: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    args: [],
                    ignore: ['public/**'],
                    ext: 'js',
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            },
            prod: {
                script: 'server.js',
                options: {
                    args: [],
                    ignore: ['public/**'],
                    ext: 'js',
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        mochaTest: {
            options: {
                reporter: 'spec',
                require: 'server.js'
            },
            src: ['test/mocha/**/*.js']
        },
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        karma: {
            unit: {
                configFile: 'test/karma/karma.conf.js'
            }
        }
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-slim');
    grunt.loadNpmTasks('grunt-contrib-compass');

    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    //Default task(s).
    grunt.registerTask('default', ['jshint', 'concurrent']);
    grunt.registerTask('server', ['nodemon:prod']);

    //Test task.
    grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
};
