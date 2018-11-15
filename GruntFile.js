module.exports = function(grunt) {

  grunt.initConfig({
  'string-replace': {
    inline: {
      files: {
        'dist/': 'web/view/*',
      },
      options: {
        replacements: [{
          pattern: /localhost:8080/gm,
          replacement: '150.162.6.19:500'
        }]
      }
    }
  },
  uglify: {
    my_target: {
      files: {
        'dist/web/scripts/agenda.min.js': ['web/scripts/agenda/*'],
        'dist/web/scripts/login.min.js': ['web/scripts/login/*']
      }
    }
  },
  copy: {
    main: {
      files: [
        // includes files within path
        {expand: true,flatten: true ,src: ['web/css/**'], dest: 'dist/web/css/', filter: 'isFile'},
  
      ],
    },
  },
  processhtml: {
    build: {
        files: {
            'dist/web/view/login.html' : ['dist/web/view/login.html'],
        }
    }
}
  });

  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');


  grunt.registerTask('default', ['string-replace','uglify','copy','processhtml']);

};