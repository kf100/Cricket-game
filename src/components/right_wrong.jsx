import React from 'react';
import "../css/design.css"

const RightWrong = ({status,restart}) => {

    // console.log(status)
    if(status==="inProgress"){
        // console.log("in INPROGRESS")
    return (
        // <div>
        //     <div id='split-pane-or'>
        //         <img width="60 px" height="60 px" style={{ borderRadius: "100%" }} src={versus} />
        //     </div>
        // </div>
        <div>
        <div className='vertical-split'></div>
        <div className="versus-block-wrapper">                     
                                
                                <div className="versus-block versus-block--new">
                                    <div className="versus-block__text">vs</div>
                                    {/* <div className="versus-block__overlay"></div> */}
                                    <div className="versus-block__icon"></div>
                                </div>
                            </div>
                            </div>           
    )
}else if(status==="Success"){
        return(
        // <div id='split-pane-or'>
        //     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        //     <circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
        //     <polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
        //   </svg>
        // </div>
        <div>
        <div className='vertical-split' />
        <div className="versus-block versus-block--win">
        {/* <div className="versus-block__text"></div> */}
        <div className="versus-block__overlay"></div>
        <div className="versus-block__icon"></div>
    </div>
    </div>
        )
    }else{
        console.log("in else")
        return(
        //     <div id='split-pane-or'>
        //         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        //     <circle className="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
        //     <line className="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
        //     <line className="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
        //   </svg>
        //   <br></br>
        //   <button className='button1 restartbutton' onClick={()=>restart()}>
        //     restart ↻
        //   </button>
        //     </div>
        <div className='split-height'>
        <div className='vertical-split' />
        <div className="versus-block versus-block--loss">
        {/* <div className="versus-block__text"></div> */}
        <div className="versus-block__overlay"></div>
        <div className="versus-block__icon"></div>
        
    </div>
    <button className='button1 restartbutton border-radius' onClick={()=>restart()}>
             restart ↻
          </button>
    </div>
    
        );
    }
}

export default RightWrong;
