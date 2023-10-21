import React from 'react';
import RightWrong from './right_wrong';
import Score from './score';

const NonPartnership = ({player1, pvalue1,p1img, player2, pvalue2,p2img,msg1_1,msg1_2,msg1_3, msg2, status, checkscore, score,clicked,restart}) => {
    let p1imagflag=false
        let p2imagflag=false
        if(p1img==="" && player1!==""){
            p1imagflag=true
        }
        if(p2img==="" && player2!==""){
            p2imagflag=true
        }
    return (
        <div>
            <div className='main'>
                {/* {p1imagflag ? (<div className='player1' style={{ backgroundImage: `url(${p1img})` }}></div>):(<h3>Hello</h3>)} */}
                    
                {/* <div className='player1' style={{ backgroundImage: `url(${p1img})` }}></div> */}
                <Score score={score}/>
                {p1imagflag ? (
                <div className='player1'>
                        <div className='banner weight'>
                            <h3 className='banner-text'>{player1}</h3>
                        </div>
                    </div>
                    ):(<div className='player1' style={{ backgroundImage: `url(${p1img})` }}></div>)}
                   
                    <div className='text left top'>
                            <h3 className='weight'>{msg1_1}</h3>
                            <h3 className='weight'><span className='text_value'>{msg1_2}</span></h3>
                            <h3 className='weight'>{msg1_3}</h3>
                        </div>
                    
                    {/* <div className='player2' style={{ backgroundImage: `url(${p2img})` }}> */}
                    {p2imagflag ? (
                <div className='player2'>
                        <div className='banner weight'>
                            <h3 className='banner-text'>{player2}</h3>
                        </div>
                    </div>
                    ):(<div className='player2' style={{ backgroundImage: `url(${p2img})` }}></div>)}
                        
                    <div className='text right bottom'>
                            <h3 className='weight'>{msg2}</h3>
                            <div>
                                {clicked ? (<h3 className='message weight'><span className='text_value'>{pvalue2}</span></h3>) : (<div>
                                    <button className='button1 border-radius' onClick={() => checkscore(true)}>Higher △</button><br></br>
                                    <button className="button1 lower_button border-radius" onClick={() => checkscore(false)}>Lower ▽</button><br></br>
                                </div>
                                )}

                            </div>
                        </div>
                </div>
                <RightWrong status={status} restart={restart} />
        </div>
    );
}

export default NonPartnership;
