const Event = require('../Schemas/event.js')


function deleteEvent(data,cb){
    // console.log('delete Event ', data)
    Event.deleteOne(data, function (err,doc) {
        // if (err) return handleError(err);
        // console.log('deleted err ', err)
        // console.log('delete data ' , JSON.stringify(doc,null,2), 'oi , ', doc.deletedCount)
        cb(err,doc)
        // deleted at most one tank document
      });
}

module.exports = deleteEvent