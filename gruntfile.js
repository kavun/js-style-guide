module.exports = function(grunt) {

	grunt.initConfig({
		markdownpdf: {
			options: {
				cssPath: 'pdf.css'
			},
			files: {
				src: "*.md",
				dest: ""
			}
		}
	});

	grunt.loadNpmTasks('grunt-markdown-pdf');

	// Default task(s).
	grunt.registerTask('pdf', ['markdownpdf']);

};