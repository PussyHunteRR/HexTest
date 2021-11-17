import React from 'react'


const Sandwich = (props) => {

    let slicesRef = React.createRef()
    let nameRef = React.createRef()
    let timeRef = React.createRef()

    let sendPost = () => {
    props.sendPost();
    }

    let changeSlices = () => {
        let text = slicesRef.current.value;
        props.changeSlices(text);

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
            <h2>Sandwich</h2>
            <label>Name</label>
            <input type="text" ref={nameRef} value={props.sandwichData.name} onChange={changeName}></input><br/>
            <label>Prepare time</label>
            <input type="time" step="1" ref={timeRef} value={props.sandwichData.time} onChange={changeTime}></input><br/>
            <label>slicesOfBread</label>
            <input type='number' ref={slicesRef} value={props.sandwichData.slices} onChange={changeSlices}></input><br/>
            <button onClick={sendPost}>Add sandwich</button>
            
        </div>
    )
}

export default Sandwich