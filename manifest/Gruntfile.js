module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		express: {
			dev: {
				options: {
					script: 'server.js'
				}
			},
		},
		less: {
			development: {
				files: {
					"public/bin/style.css": "source/style.less"
				}
			}
		},
		watch: {
			css: {
				files: "source/**/*.less",
				tasks: ['less'],
				options: {
					livereload: 3001,
				}
			},
			html: {
				files: ["public/**/*.html", "public/**/*.js", "public/**/*.png"],
				options: {
					livereload: 3001
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('default', ['express:dev', 'less', 'watch']);
};