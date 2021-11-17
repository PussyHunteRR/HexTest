import React from 'react'


const Soup = (props) => {

    let spicenessRef = React.createRef()
    let nameRef = React.createRef()
    let timeRef = React.createRef()

    let sendPost = () => {
    props.sendPost();
    }

    let changeSpiceness = () => {
        let text = spicenessRef.current.value;
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
            <h2>Soup</h2>
            <label>Name</label>
            <input type="text" ref={nameRef} value={props.soupData.name} onChange={changeName}></input><br/>
            <label>Prepare time</label>
            <input type="time" step="1" ref={timeRef} value={props.soupData.time} onChange={changeTime}></input><br/>
            <label>Spiceness</label>
            <input type='number' ref={spicenessRef} value={props.soupData.spiceness} onChange={changeSpiceness}></input><br/>
            <button onClick={sendPost}>Add soup</button>
            
        </div>
    )
}

export default Soup