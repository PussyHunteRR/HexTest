import React from 'react'

const Pizza = (props) => {

    let slicesRef = React.createRef()
    let diametrRef = React.createRef()
    let nameRef = React.createRef()
    let timeRef = React.createRef()

    let sendPost = () => {
    props.sendPost();
    }

    let changeSlices = () => {
        let text = slicesRef.current.value;
        props.changeSlices(text);

    }

    let changeDiametr = () => {
        let text = diametrRef.current.value;
        props.changeDiametr(text);

    }

    let changeName = () => {
        let text = nameRef.current.value;
        props.changeName(text);

    }

    let changeTime = () => {
        let text = timeRef.current.value;
        props.changeTime(text);

    }

    return (
        <div>
            <h2>Pizza</h2>
            <label>Name</label>
            <input type="text" ref={nameRef} value={props.pizzaData.name} onChange={changeName}></input><br/>
            <label>Prepare time</label>
            <input type="time" step="1" ref={timeRef} value={props.pizzaData.time} onChange={changeTime}></input><br/>
            <label>No of slices</label>
            <input type='number' ref={slicesRef} value={props.pizzaData.slices} onChange={changeSlices}></input><br/>
            <label>Diametr</label>
            <input type='number' step="0.1" ref={diametrRef} value={props.pizzaData.diametr} onChange={changeDiametr}></input><br/>
            <button type='submit' onClick={sendPost}>Add pizza</button>
            
        </div>
    )
}

export default Pizza
