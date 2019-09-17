/**
 * @summary Receive the start and end date
 * @param {(string | Date)} start - The start date
 *  @param {(string | Date)} end - The end date
 * @returns {Object} Return the linkeds slots and initial slot
 */
function getSlots(start,end){
     let startParam = new Date(start)
     let endParam = new Date(end)
     let calculed = {};
     //calc links slots
     let inicialSlot; //slot inicial do evento
     let linkedSlots;; //total de slots que o evento usa
     let slotHour = 0;
     let slotMinutes = 0;
     let hourStart = startParam.getHours()
     let MinuteStart = startParam.getMinutes()
     let hourEnd = endParam.getHours()
     let MinuteEnd = endParam.getMinutes()
 
     if(MinuteStart != 0 || MinuteEnd != 0){
       if(MinuteStart != 0){
         inicialSlot = (hourStart*2) + 1;
         linkedSlots = ((hourEnd - hourStart)*2) - 1;
       }
       if(MinuteEnd != 0){
         inicialSlot == undefined ? inicialSlot = (hourStart*2) : '';
         linkedSlots == undefined 
         ? linkedSlots = ((hourEnd - hourStart)*2) + 1
         : linkedSlots = linkedSlots + 1
       }
    }else{
       inicialSlot = (hourStart*2);
       linkedSlots = (hourEnd - hourStart)*2;
    }
     // console.log('inicialSlot ', inicialSlot, linkedSlots )
     calculed['inicial'] = inicialSlot; //Ok
     calculed['linkeds'] = linkedSlots;
     return calculed
    
}

/**
 * recebe um slot inicial e um final e retorna a hora inicial e final do evento
 * @param {Array} slots - The event slots 
 */
function getTimeSlot(slots){
  let hours = [];
        let hourStart ;
        let minutesStart;
        let hourEnd;
        let minutesEnd;

        slots.map((ele)=>{
            // console.log('map nos slots', ele/2)
            if(ele%2 == 0){
                //hora termina com 00
                hours.push(new Date(new Date(((new Date().setHours(ele/2)))).setMinutes(0)))
            }else{
                hours.push(new Date(new Date(((new Date().setHours((ele/2)-0.5)))).setMinutes(30)))
            }
        })

        return hours;
}

function organizedEvents(events){
  console.log('organizando eventos')
  let slots;
  let linkedTemp;
  let organizedEvents = {};
  events.map((ele)=>{
    //create year
    if(organizedEvents[ele.year] == undefined){ 
      organizedEvents[ele.year] = {}
    }
    //create month
    if(organizedEvents[ele.year][ele.month] == undefined){
      organizedEvents[ele.year][ele.month] = {}
    }
    //create day
    if(organizedEvents[ele.year][ele.month][ele.dayStart] == undefined){
      organizedEvents[ele.year][ele.month][ele.dayStart] = []
    }
    
    slots = this.getSlots(ele.start,ele.end)

    if(organizedEvents[ele.year][ele.month][ele.dayStart][slots['inicial']] == undefined){
      organizedEvents[ele.year][ele.month][ele.dayStart][slots['inicial']] = ele;
      for(var i = 1; i < slots['linkeds']; i++){
        linkedTemp = slots['inicial'] + i
        organizedEvents[ele.year][ele.month][ele.dayStart][linkedTemp] = {linked:slots['inicial']};
      }
    }
    

  })
  return organizedEvents
}

function blockSlotsStart(start,organizedEvents){
  // console.log('blockSlotsStart-> start  ',start, organizedEvents)
  let slotsArray = []
  let year = start.getFullYear()
  let month = start.getMonth() + 1
  let day = start.getDate();
  let dayEvents = (((organizedEvents[year] || {})[month]|| {})[day] ||{});
  for(var a = 0; a<=48; a++){
      if(dayEvents[a] != undefined && dayEvents[a] != null ){
          slotsArray.push(a)
      }
  }
  // console.log('blockSlotsStart-> fim ','slotsArray ', slotsArray,'getTimeSlot(slotsArray) ',getTimeSlot(slotsArray) )
  return getTimeSlot(slotsArray)
}

function blockSlotsEnd(start,end,organizedEvents){
  let slotsArray = []
  let year = start.getFullYear()
  let month = start.getMonth() + 1
  let day = start.getDate();
  let slots = getSlots(start,end)
  let dayEvents = (((organizedEvents[year] || {})[month]|| {})[day] ||{});
  let length = (slots['linkeds'] + slots['inicial'])
  for(var a = 0; a<=48; a++){
    if(a >= length+1 && dayEvents[a] != undefined &&  dayEvents[a] != null ){ 
      slotsArray = arrayFull(a,48);
      break
    }
    if(dayEvents[a] != undefined &&  dayEvents[a] != null ){
          slotsArray.push(a)
      }
  }
  return getTimeSlot(slotsArray)
}

arrayFunctions = {
    getSlots : getSlots,
    getTimeSlot: getTimeSlot,
    organizedEvents: organizedEvents,
    blockSlotsStart:blockSlotsStart,
    blockSlotsEnd: blockSlotsEnd,
}

module.exports = arrayFunctions


function arrayFull(inicial,final){
  var array = []
  for(var a = inicial; a <= final; a++){
    array.push(a)
  }
  return array;
}