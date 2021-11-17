import { sendRequest, urlR } from './../../Xhr/Xhr';
const SEND_PIZZA_POST = 'SEND-PIZZA-POST'
const UPDATE_PIZZA_NUMBER_SLICES = 'UPDATE-PIZZA-NUMBER-SLICES'
const UPDATE_PIZZA_DIAMETR = 'UPDATE-PIZZA-DIAMETR'
const UPDATE_PIZZA_NAME = 'UPDATE-PIZZA-NAME'
const UPDATE_PIZZA_TIME = 'UPDATE-PIZZA-TIME'


let initionalState = {
  slices: "",
  diametr: "",
  name: "",
  time: "",
  type: "pizza"
}

const pizzaReduser = (state = initionalState, action) => {


let body = {
  name: state.name.trim(),
  preparation_time: state.time,
  type: state.type,
  no_of_slices: parseInt(state.slices),
  diameter: parseFloat(state.diametr)
}
    switch(action.type) {
        case SEND_PIZZA_POST:
          if(body.preparation_time && body.type !== '', body.no_of_slices && body.diameter && body.name.length >0){ 
        console.log(body)
        sendRequest('POST', urlR, body)
        .then(alert('Data sent successfully'))
        .catch(err => alert(`Error: ${err}\nAll wields are required!\n Try again`))

      } else {
        alert("All wields are required and will be bigger than 0!")
      }
          return state;
        case UPDATE_PIZZA_NUMBER_SLICES: 
            state.slices = action.slices;
            return state;
        case UPDATE_PIZZA_DIAMETR: 
            state.diametr = action.diametr;
            return state;
        case UPDATE_PIZZA_NAME: 
            state.name = action.name;
            return state;
        case UPDATE_PIZZA_TIME: 
            state.time = action.time;
            return state;
        default:
            return state
    }
    
}

export const sendPostPizzaAction = () => {
    return {
      type: SEND_PIZZA_POST
    }
  }
  
  export const updateNumberPizzaSlicesAction = (text) => {
    return {
      type: UPDATE_PIZZA_NUMBER_SLICES,
      slices: text
    }
  }

  export const updatePizzaDiametrAction = (text) => {
    return {
      type: UPDATE_PIZZA_DIAMETR,
      diametr: text
    }
  }

  export const updatePizzaNameAction = (text) => {
    return {
      type: UPDATE_PIZZA_NAME,
      name: text
    }
  }

  export const updatePizzaTimeAction = (text) => {
    return {
      type: UPDATE_PIZZA_TIME,
      time: text
    }
  }
  

export default pizzaReduser