exports.insertEvent = insertEvent;

const EventSchema = require('../Schemas/event');

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
function insertEvent(evento,cb, erro){
    var evento = new EventSchema(evento);
    evento.save(function (err, event) {
      if (err) erro();
      cb(event);
    }); 
}