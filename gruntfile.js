module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-mocha-cli');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			specs: {
				src: ["./public/tests/src/*/*.js"],
				dest: "./public/test/specs.js",
				options: {
					browserifyOptions: {
						debug: true,
						paths: ["./node_modules", "./public/javascripts"],
		            	"transform": ["reactify"]
					}
				}
			},
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
		"mochacli": {
	        options: {
	          reporter: 'mocha-lcov-reporter',
	          require:['should','jsdom','react'],
	          compilers: ['./public/tests/compiler.js'],
	          files:'./public/tests/components/test.UserName.js'
	        }
	      }
	});
	grunt.registerTask('bundle', ['browserify:bundle']);
	grunt.registerTask('test', ['mochacli']);
};