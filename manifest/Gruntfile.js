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
		uglify: {
			js: {
				files: {
					"public/bin/nodebb.min.js": ["public/assets/lib/main.js"]
				}
			}
		},
		watch: {
			css: {
				files: "source/**/*.less",
				tasks: ["less"],
				options: {
					livereload: 3001
				}
			},
			js: {
				files: "public/**/*.js",
				tasks: ["uglify"],
				options: {
					livereload: 3001
				}
			},
			html: {
				files: ["templates/**/*.html", "public/**/*.png", "server.js"],
				options: {
					livereload: 3001
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('default', ['express:dev', 'less', 'uglify', 'watch']);
};