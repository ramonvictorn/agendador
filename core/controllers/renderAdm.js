/** 
* @author Ramon Victor <ramon.lantec@gmail.com>
* @desc Concentra os das rotas que retornam páginas
*/


exports.adm = adm;


/**  
*
* @desc Renderiza a página para a rota adm
* @param {Object} req  objeto que contém os parametros da requisição 
* @param {Object} res  objeto que contém os parametros da resposta 
*/
function adm(req,res){
    res.render('adm');
    console.log('rota /adm acessada')
}
