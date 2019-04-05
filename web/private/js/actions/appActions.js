export const IS_LOGGED = 'IS_LOGGED';
export const SET_LOGGED = 'SET_LOGGED';
// export const SAVE_USER = 'SAVE_USER';
export const SAVE_MY_ID = 'SAVE_MY_ID'

export const isLogged = {
  type: IS_LOGGED,
  payload : {}
};


export const saveMyId = value =>({
  type:SAVE_MY_ID,
  payload : {value},
})

// export const setLogged = ()  = ({
//   type: SET_LOGGED,
//   payload: {}
// })

export const setLogged = value =>({
  type:SET_LOGGED,
  payload : {value},
})

// export const saveUser = value =>({
//   type: SAVE_USER,
//   payload:{value},
// })