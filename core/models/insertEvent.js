exports.insertEvent = insertEvent;

const Event = require('../Schemas/event');

/**
 * @function insertEvent - realiza a criacao do evento atráves do Schema e o insere no banco
 * @param {Object} evento - objeto com as seguintes propriedades
 * @param {String} evento.name
 * @param {Date} evento.start
 * @param {Date} evento.end
 * @param {String} evento.usuario
 * @param {Function} cb - callback de sucesso
 * @param {Function} erro - callback de erro
 */
function insertEvent(data,cb){
  let response = {}
  save();

  function save(){
    var evento = new Event({
        agenda: data.agenda,
        title:data.title,
        start:data.start,
        end:data.end,
        user:data.user,
        dayStart: data.dayStart,
        dayEnd: data.dayEnd,
        year: data.year,
        month: data.month,
        details: data.details,
    });

    evento.save(function (err,event) {
      if (err) {
          console.log('INSERT EVENT MODEL ERROR - ', err, event)
          response.error = {text: 'SAVE_ERROR'};
        }else {
            // saved!
            //console.log('INSERT EVENT MODEL - SAVE SUCESS');
            response.data = event
        }
        cb(response);
    });
  }
}