module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-mocha-cli');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			bundle: {
				src: ["./public/javascripts/app.js"],
				dest:"./public/javascripts/bundle.js",
				dist: {
			            files: {
		               // if the source file has an extension of es6 then
		               // we change the name of the source file accordingly.
		               // The result file's extension is always .js
		               "./public/javascripts/bundle.js": ["./public/javascripts/app.js"] 
		            }
		        },
				options: {
					browserifyOptions: {
						paths: ["./node_modules", "./public/javascripts"],
						debug: true,
		            	"transform": ["reactify"]
					}
				}
			}
		},
		babel: {
	        options: {
	            sourceMap: true,
	            nonStandard: true
	        },
	        dist: {
	            files: {
	                './public/javascripts/_app.js': './public/javascripts/app.js'
	            }
	        }
	    },
		mochaTest: {
		      test: {
		        options: {
		          reporter: 'spec',
		          captureFile: 'results.txt', // Optionally capture the reporter output to a file
		          quiet: false, // Optionally suppress output to standard out (defaults to false)
		          clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
		          require: ['public/tests/compiler.js']
		        },
		        src: ['./public/tests/components/*.js']
		      }
		  }
  	});
	grunt.registerTask('bundle', ['browserify:bundle']);
	grunt.registerTask('test', ['mochaTest']);
};