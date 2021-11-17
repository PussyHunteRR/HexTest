import { sendPostSandwichAction, 
    updateNumberSandwichSlicesAction,
    updateSandwichNameAction,
    updateSandwichTimeAction } 
    from './../../Redux/Reducers/sandwichReducer'
import { connect } from 'react-redux'
import Sandwich from './Sandwich';

let mapStateToProps = (state) => {
    return{
        sandwichData: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost: () => {
            dispatch(sendPostSandwichAction());
        },
        changeSlices: (text) => {
            dispatch(updateNumberSandwichSlicesAction(text));
        },
        changeName: (text) => {
            dispatch(updateSandwichNameAction(text));
        },
        changeTime: (text) => {
            dispatch(updateSandwichTimeAction(text));
        }
    }
}

const SandwichContainer = connect(mapStateToProps, mapDispatchToProps)(Sandwich);

export default SandwichContainer

