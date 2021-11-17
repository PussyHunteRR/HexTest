import { sendPostPizzaAction, 
    updateNumberPizzaSlicesAction, 
    updatePizzaDiametrAction, 
    updatePizzaNameAction, 
    updatePizzaTimeAction } 
    from './../../Redux/Reducers/pizzaReduces'
import { connect } from 'react-redux'
import Pizza from './Pizza';

let mapStateToProps = (state) => {
    return{
        pizzaData: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost: () => {
            dispatch(sendPostPizzaAction());
        },
        changeSlices: (text) => {
            dispatch(updateNumberPizzaSlicesAction(text));
        },
        changeDiametr: (text) => {
            dispatch(updatePizzaDiametrAction(text));
        },
        changeName: (text) => {
            dispatch(updatePizzaNameAction(text));
        },
        changeTime: (text) => {
            dispatch(updatePizzaTimeAction(text));
        }
    }
}

const PizzaContainer = connect(mapStateToProps, mapDispatchToProps)(Pizza);

export default PizzaContainer

