export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const UPDATE_EVENTS = 'UPDATE_EVENTS';
export const SET_VALUES_MODAL = 'SET_VALUES_MODAL';
export const SET_MODAL_TYPE = 'SET_MODAL_TYPE';
export const UPDATE_ORGANIZE_EVENTS = 'UPDATE_ORGANIZE_EVENTS';
export const ADD_SCHEDULE = 'ADD_SCHEDULE';
export const SET_CURRENT_SCHEDULE = 'SET_CURRENT_SCHEDULE';
export const ADD_MONTH_VERIFIED = 'ADD_MONTH_VERIFIED';
export const CLEAN_MONTHS_VIRIFIEDS= 'CLEAN_MONTHS_VIRIFIEDS';


// refactored
export const ADD_EVENTS = 'ADD_EVENTS';

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
  payload : {}
});


export const updateEvents = (events,agenda) => ({
  type: UPDATE_EVENTS,
  payload: { events: events, agenda:agenda },
});

export const updateOrganizeEvents = (events,agenda) => ({
  type: UPDATE_ORGANIZE_EVENTS,
  payload: { events: events, agenda:agenda },
});

export const setValuesModal = values =>({
  type:SET_VALUES_MODAL,
  payload : {values},
})

export const setModalType = value =>({
  type: SET_MODAL_TYPE,
  payload: {value},
})


export const addSchedule = value => ({
  type: ADD_SCHEDULE,
  payload: {value}
})


export const setCurrentSchedule = value => ({
  type: SET_CURRENT_SCHEDULE,
  payload: {value}
})


export const addMonthVerified = month =>({
  type:ADD_MONTH_VERIFIED,
  payload : {month},
})

export const cleanMonthsVerifieds= month =>({
  type:ADD_MONTH_VERIFIED,
  payload : {month},
})

export const addEvents = (agenda,year,month,events)=>({
  type: ADD_EVENTS,
  payload: {agenda,year,month,events},
})