exports.insertEvent = insertEvent;


function insertEvent(req,res){
    console.log('insert event', req.body)
    var evento= req.body;
    modelPost.insertEvent(evento);
}
