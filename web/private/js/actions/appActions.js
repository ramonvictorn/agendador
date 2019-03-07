export const IS_LOGGED = 'IS_LOGGED';
export const SET_LOGGED = 'SET_LOGGED';
export const SAVE_USER = 'SAVE_USER';

export const isLogged = {
  type: IS_LOGGED,
  payload : {}
};

// export const setLogged = ()  = ({
//   type: SET_LOGGED,
//   payload: {}
// })

export const setLogged = value =>({
  type:SET_LOGGED,
  payload : {value},
})

export const saveUser = value =>({
  type: SAVE_USER,
  payload:{value},
})