module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-babel');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			specs: {
				src: ["./public/tests/models/*.js", "./public/tests/collections/*.js", "./public/tests/observers/*.js"],
				dest: "./public/test/specs.js",
				options: {
					browserifyOptions: {
						debug: true,
						paths: ["./node_modules", "./public/javascripts"],
					}
				}
			},
			bundle: {
				src: ["./public/javascripts/app.js"],
				dest:"./public/javascripts/bundle.js",
				dist: {
		            options: {
		               transform: [
		                  ["babelify", {
		                     loose: "all"
		                  }]
		               ]
		            }
		        },
				options: {
					browserifyOptions: {
						paths: ["./node_modules", "./public/javascripts"],
						debug: true
					}
				}
			}
		},
		jasmine: {
			tests: {
				src: [],
				options: {
					outfile: "public/test/_SpecRunner.html",
					specs: "public/test/specs.js"    
				}
			}
		},
		babel: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                './public/javascripts/_app.js': './public/javascripts/app.js'
	            }
	        }
	    },

	});
	grunt.registerTask('bundle', ['browserify:bundle']);
	grunt.registerTask('test', ['browserify:specs', 'jasmine']);
};