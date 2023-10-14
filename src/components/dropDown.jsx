import React from 'react';
import "../css/dropDown.css"

const DropDown = ({type,change}) => {
    // function change(t){
    //     reset()
    //     setType(t)
    //     // Call()
    //     // console.log(t)
    //     setTimeout(()=>{Call()},5000)
    //     // setTimeout(()=>{restart()},500)
    //     // setTimeout(()=>{start(t)},1000)
    // }
    // function Call(){
    //     restart()
    // }
    // function change(t){
    //     setType(t)
    //     setType(type = t, (prevValue, newValue) => {
    //         console.log(prevValue);
    //         console.log(newValue);
    //         // console.log("restart called")
    //            setTimeout(()=>{restart()},1000)
    //     });
    //     // restart()

    // }

    return (
        <div className='dropDown'>
            <label htmlFor='select' >Type:</label>
            <select className='select' name='Type' onChange={e=>change(e.target.value)} value={type}>
                <option className='option' value='All'>Test/ODI/T20</option>
                <option className='option' value='Test'>Test</option>
                <option className='option' value='ODI'>ODI</option>
                <option className='option' value='T20'>T20</option>
            </select>
            {/* <h1>Hello</h1> */}
        </div>
    );
}

export default DropDown;
