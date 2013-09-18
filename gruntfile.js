module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		markdownpdf: {
			options: {
				cssPath: 'pdf.css'
			},
			files: {
				src: "README.md",
				dest: 'dist'
			}
		},
		rename: {
		  main: {
		    files: [
		        {
		        	src: ['dist/README.pdf'], 
		        	dest: 'dist/<%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %>.pdf'
		        },
	        ]
		  }
		}
	});

	grunt.loadNpmTasks('grunt-markdown-pdf');
	grunt.loadNpmTasks('grunt-contrib-rename');

	// Default task(s).
	grunt.registerTask('pdf', ['markdownpdf', 'rename']);

};