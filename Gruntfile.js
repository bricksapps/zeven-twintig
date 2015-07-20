module.exports = function(grunt) {


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		/** Sass task **/
		sass: {

			dev: {
				options: {
					style: 'expanded',
					sourcemap: 'none',
				},
				files: {
					'compiled/style-human.css': 'sass/style.scss'
				}
			},

			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none',
				},
				files: {
					'compiled/style.css': 'sass/style.scss'
				}
			}

		},
		/** Autoprefixer **/

		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},

			// Prefix all files
			multiple_files: {
				expand: true,
				flatten: true,
				src: 'compiled/*.css',
				dest: ''
			}
		},

		/** Watch task **/

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer']
			}
		},

		
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default', ['watch']);

};