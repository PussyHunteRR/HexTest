import { sendRequest, urlR } from "../../Xhr/Xhr"
const SEND_SANDWICH_POST = 'SEND-SANDWICH-POST'
const UPDATE_SANDWICH_NUMBER_SLICES = 'UPDATE-SANDWICH-NUMBER-SLICES'
const UPDATE_SANDWICH_NAME = 'UPDATE-SANDWICH-NAME'
const UPDATE_SANDWICH_TIME = 'UPDATE-SANDWICH-TIME'


let initionalState = {
slicesOfBread: "",
name: "",
time: "",
type: "sandwich"
}

const sandwichReduser = (state = initionalState, action) => {

  let body = {
    name: state.name,
    preparation_time: state.time,
    type: state.type,
    slices_of_bread: parseInt(state.slicesOfBread)
  }
    switch(action.type) {
        case SEND_SANDWICH_POST:
          if(body.name.length && body.slices_of_bread >0, body.preparation_time && body.type !== "" ) {
          sendRequest('POST', urlR, body)
          .then(alert('Data sent successfully'))
          .catch(err => alert(`Error: ${err}\nAll wields are required!\n Try again`)) 
        } else {
          alert("All wields are required and will be bigger than 0!")
        }
          return state;
        case UPDATE_SANDWICH_NUMBER_SLICES: 
            state.slicesOfBread = action.slicesOfBread;
            return state;
        case UPDATE_SANDWICH_NAME: 
            state.name = action.name;
            return state;
        case UPDATE_SANDWICH_TIME: 
            state.time = action.time;
            return state;
        default:
            return state
    }
    
}

export const sendPostSandwichAction = () => {
    return {
      type: SEND_SANDWICH_POST
    }
  }
  
  export const updateNumberSandwichSlicesAction = (text) => {
    return {
      type: UPDATE_SANDWICH_NUMBER_SLICES,
      slicesOfBread: text
    }
  }

  export const updateSandwichNameAction = (text) => {
    return {
      type: UPDATE_SANDWICH_NAME,
      name: text
    }
  }

  export const updateSandwichTimeAction = (text) => {
    return {
      type: UPDATE_SANDWICH_TIME,
      time: text
    }
  }

export default sandwichReduser