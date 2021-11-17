import { sendPostSoupAction, 
    updateSpicenessAction,
    updateSoupNameAction,
    updateSoupTimeAction } 
    from './../../Redux/Reducers/soupReducer'
import { connect } from 'react-redux'
import Soup from './Soup';

let mapStateToProps = (state) => {
    return{
        soupData: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost: () => {
            dispatch(sendPostSoupAction());
        },
        changeSlices: (text) => {
            dispatch(updateSpicenessAction(text));
        },
        changeName: (text) => {
            dispatch(updateSoupNameAction(text));
        },
        changeTime: (text) => {
            dispatch(updateSoupTimeAction(text));
        }
    }
}

const SoupContainer = connect(mapStateToProps, mapDispatchToProps)(Soup);

export default SoupContainer

