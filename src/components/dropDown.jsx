import React from 'react';
import "../css/dropDown.css"

const DropDown = ({type,change}) => {

    return (
        <div className='dropDown'>
            <label htmlFor='select' className='textstyle' >Type:</label>
            <select className='select textstyle' name='Type' onChange={e=>change(e.target.value)} value={type}>
                <option className='option' value='All'>Test/ODI/T20</option>
                <option className='option' value='Test'>Test</option>
                <option className='option' value='ODI'>ODI</option>
                <option className='option' value='T20'>T20</option>
            </select>
        </div>
    );
}

export default DropDown;
