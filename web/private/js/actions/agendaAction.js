export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const UPDATE_EVENTS = 'UPDATE_EVENTS';
export const SET_VALUES_MODAL = 'SET_VALUES_MODAL';

export const toggleModal = {
    type: TOGGLE_MODAL,
    payload : {}
};


export const updateEvents = events => ({
  type: UPDATE_EVENTS,
  payload: { events: events },
});

export const setValuesModal = values =>({
  type:SET_VALUES_MODAL,
  payload : {values},
})