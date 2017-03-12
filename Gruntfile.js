module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine: {
                files: {
                    'styles/main-min.css': ['styles/main.css', 'styles/animate.css']
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'scripts/app.min.js': ['scripts/app.js', 'scripts/services/services.js', 'scripts/controllers/portfolio.js']
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                  expand: true,
                  cwd: 'assets/images',
                  src:['**/*.{png,jpeg,jpg,gif,JPG}'],
                  dest: 'assets/images'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask("default", ["cssmin", "uglify", "imagemin"]);
};
