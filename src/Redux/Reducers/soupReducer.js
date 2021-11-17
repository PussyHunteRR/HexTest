import { sendRequest, urlR } from "../../Xhr/Xhr"
const SEND_SOUP_POST = 'SEND-SOUP-POST'
const UPDATE_SOUP_SPICENESS = 'UPDATE-SOUP-SPICENESS'
const UPDATE_SOUP_NAME = 'UPDATE-SOUP-NAME'
const UPDATE_SOUP_TIME = 'UPDATE-SOUP-TIME'


let initionalState = {
spiceness: "",
name: "",
time: "00:00:00",
type: "soup"
}

const soupReduser = (state = initionalState, action) => {

  let body = {
    name: state.name,
    preparation_time: state.time,
    type: state.type,
    spiciness_scale: parseInt(state.spiceness)
  }

    switch(action.type) {
        case SEND_SOUP_POST:
          if(body.name.length >0, body.type && body.preparation_time !== "", body.spiciness_scale >=1, body.spiciness_scale <=10) {
          sendRequest('POST', urlR, body)
          .then(alert('Data sent successfully'))
          .catch(err => alert(`Error: ${err}\nAll wields are required!\n Try again`))
    } else {
      alert("All wields are required!\n Spiciness will be in range 1-10!")
    } 
          return state;
        case UPDATE_SOUP_SPICENESS: 
            state.spiceness = action.spiceness;
            return state;
        case UPDATE_SOUP_NAME: 
            state.name = action.name;
            return state;
        case UPDATE_SOUP_TIME: 
            state.time = action.time;
            return state;
        default:
            return state
    }
    
}

export const sendPostSoupAction = () => {
    return {
      type: SEND_SOUP_POST
    }
  }
  
  export const updateSpicenessAction = (text) => {
    return {
      type: UPDATE_SOUP_SPICENESS,
      spiceness: text
    }
  }
  
  export const updateSoupNameAction = (text) => {
    return {
      type: UPDATE_SOUP_NAME,
      name: text
    }
  }

  export const updateSoupTimeAction = (text) => {
    return {
      type: UPDATE_SOUP_TIME,
      time: text
    }
  }

export default soupReduser