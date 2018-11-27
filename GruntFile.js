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
        'public/js/agenda.js': ['web/js/agendaInsertEvent.js','web/js/agendaConfig.js', 'web/js/agendaGetEvents.js', 'web/js/agendaScript.js','web/js/agendaInteracao.js'],
        
        'public/js/login.js': ['web/js/loginLogin.js', 'jquery.mask.min.js'],
        'public/js/jquery.mask.min.js': ['web/js/jquery.mask.min.js'],
        'public/js/admCadastroUsuario.js':['web/js/admCadastroUsuario.js'],
      }
    }
  },
  copy: {
    main: {
      files: [
        // includes files within path
        {expand: true,flatten: true ,src: ['web/css/**'], dest: 'public/css/', filter: 'isFile'},
        {expand: true,flatten: true ,src: ['web/templates/*.html'], dest: 'public/templates/', filter: 'isFile'},
        {expand: true,flatten: true ,src: ['node_modules/jquery/dist/jquery.min.js'], dest: 'public/js/', filter: 'isFile'},
        {expand: true,flatten: true ,src: ['node_modules/fullcalendar/dist/fullcalendar.min.js'], dest: 'public/js/', filter: 'isFile'},
        {expand: true,flatten: true ,src: ['node_modules/fullcalendar/dist/fullcalendar.min.css'], dest: 'public/css/', filter: 'isFile'},
        {expand: true,flatten: true ,src: ['node_modules/moment/min/moment.min.js'], dest: 'public/js/', filter: 'isFile'},
        {expand: true,flatten: true ,src: ['node_modules/fullcalendar/dist/locale-all.js'], dest: 'public/js/', filter: 'isFile'},
      ],
    },
  },
  processhtml: {
    build: {
        files: {
            'public/templates/login.html' : ['public/templates/login.html'],
            'public/templates/agenda.html':['public/templates/agenda.html'],
            'public/templates/adm.html':['public/templates/adm.html'],
        }
    }
}
  });

  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');

  function nodeMdules(){
    console.log('ramonnn')
  }
  nodeMdules();
  grunt.registerTask('default', ['uglify','copy','processhtml']);

};