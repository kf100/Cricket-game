import React from 'react';
import "../css/design.css"

const RightWrong = ({status,restart}) => {

    if(status==="inProgress"){
    return (
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
        return(
        <div className='split-height'>
        <div className='vertical-split' />
        <div className="versus-block versus-block--loss">
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
