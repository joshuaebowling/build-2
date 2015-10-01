module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			bundle: {
				src: ["./public/javascripts/app.js", "./public/javascripts/lib.js"],
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
						external:['react'],
		            	"transform": ["babelify", "reactify"]
					}
				}
			},
			vendor: {
				src: ["./public/javascripts/lib.js"],
				dest:"./public/javascripts/vendor.js",
				dist: {
			            files: {
		               // if the source file has an extension of es6 then
		               // we change the name of the source file accordingly.
		               // The result file's extension is always .js
		               "./public/javascripts/vendor.js": ["./public/javascripts/lib.js"]

		            }
		        },
				options: {
					browserifyOptions: {
						paths: ["./node_modules", "./public/javascripts"],
						debug: true,
		            	"transform": ["babelify", "reactify"]
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
		          reporter: 'mocha-unfunk-reporter',
		          quiet: false, // Optionally suppress output to standard out (defaults to false)
		          clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
		          require: ['public/tests/compiler.js']
		        },
		        src: ['./public/tests/components/*.js']
		      }
		},
		uglify: {
		    my_target: {
		      files: {
		        'public/javascripts/bundle.min.js':['public/javascripts/bundle.js']
		      },
		      options:{
		      	mangle:false
		      }
		    }
		  }
  	});
	grunt.registerTask('bundle', ['browserify:bundle','browserify:vendor','uglify']);
	grunt.registerTask('test', ['mochaTest']);
};