/** 
* @author Ramon Victor <ramon.lantec@gmail.com>
* @desc Concentra os das rotas que retornam páginas
*/


exports.agenda = agenda;
const models = require('../models/models');

/**  
*
* @desc Renderiza a página para a rota agenda
* @param {Object} req  objeto que contém os parametros da requisição 
* @param {Object} res  objeto que contém os parametros da resposta 
*/
function agenda(req,res){
    res.render('agenda');
    console.log('rota /agenda acessada')
}



