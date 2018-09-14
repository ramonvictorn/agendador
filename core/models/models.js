exports.getTiposPatrimonios = getTiposPatrimonios;
exports.getConsulta = getConsulta;


function getTiposPatrimonios(req,res){
    res.render('cadastro')
}


function getConsulta(req,res){
    res.render('consulta');
}