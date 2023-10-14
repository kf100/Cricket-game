import React from 'react';
import RightWrong from './right_wrong';
import Score from './score';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../css/partnership.css";

const Partnership = ( {player1, pvalue1,p1img, player2, pvalue2,p2img,msg1_1,msg1_2,msg1_3, msg2, status, checkscore, score,clicked,restart}) => {
    console.log("p1img",p1img)
    console.log("p2img",p2img)
    console.log("p1img[0]",p1img[0])
    console.log("p2img[0]",p2img[0])
    console.log("pvalue1",pvalue1)
    console.log("pvalue2",pvalue2)
    // console.log("partner value:",msg1_2)

    
        let p1_1imagflag=false
        let p1_2imagflag=false
        let p2_1imagflag=false
        let p2_2imagflag=false

        //==="" has no logic but still added
        if(p1img[0]==="" || p1img[0]===undefined && player1!==""){
            var Splitplayer1=split(player1)   
            p1_1imagflag=true
        }
        if(p1img[1]==="" || p1img[1]===undefined && player1!==""){
            var Splitplayer1=split(player1)
            p1_2imagflag=true
        }

        if(p2img[0]==="" || p2img[0]===undefined && player2!==""){
            var Splitplayer2=split(player2)
            p2_1imagflag=true
        }
        if(p2img[1]==="" || p2img[1]===undefined && player2!==""){
            var Splitplayer2=split(player2)
            p2_2imagflag=true
        }
        
        function split(player){

            var splitdata=player.split(" and ")
            
            let symb=splitdata[1].split(" ")
            var symbol=String(symb[symb.length-1])
            
            splitdata[0]=splitdata[0].trim()
            splitdata[0]=splitdata[0]+" "+symbol
            splitdata[0]=splitdata[0].trim()
            splitdata[1]=splitdata[1].trim()
            return[splitdata[0],splitdata[1]]
        }
        
    return (
        
        <div>
        
        <Score score={score}/>
        <div className='left txt1 weight'>
                        <h3>{msg1_1}</h3>
                            <h3><span className='text_value'>{msg1_2}</span></h3>
                            <h3>{msg1_3}</h3>
             </div>

             <table className="txt2 right weight">
             <tbody>
                                <tr>
                                    <td><h3 >{msg2}</h3></td>
                                    </tr>
                                    <tr>
                                    <td>
                                        {clicked ? (<h3 className='message'><span className='text_value'>{pvalue2}</span></h3>) : 
                                        (<div>
                                            <button className='button1 border-radius' onClick={() => checkscore(true)}>Higher △</button><br></br>
                                            <button className="button1 lower_button border-radius" onClick={() => checkscore(false)}>Lower ▽</button><br />
                                        </div>
                                        )}
                                    </td>
                                    </tr>
                                    </tbody>
                            </table>
        <div className="container-fluid">
            <div className="row my-0">
                <div className="col-md-6">
                    <div className="row alignment">
                    {p1_1imagflag ? (
                <div className='col-6 col-md-12 mx-0 p-0 partnership_player1'>
                        <div className='banner-partnership weight'>
                            <h3>{Splitplayer1[0]}</h3>
                        </div>
                    </div>
                    ):(<div className="col-6 col-md-12 mx-0 p-0 partnership_player1" style={{backgroundImage: `url(${p1img[0]})`}}> </div>)}
                    {/* <div className="col-6 col-md-12 mx-0 p-0 partnership_player1">
                        <div className='banner-partnership'>
                            <h5 className='weight'>{player2}</h5>
                        </div>
                    </div> */}
                            
                        
                        {/* <div className="col-6 col-md-12 mx-0 p-0 partnership_player1 zindex" style={{backgroundImage: `url(${p1img[1]})`}}></div> */}
                        {p1_2imagflag ? (
                <div className='col-6 col-md-12 mx-0 p-0 partnership_player1'>
                        <div className='banner-partnership weight'>
                            <h3>{Splitplayer1[1]}</h3>
                        </div>
                    </div>
                    ):(<div className="col-6 col-md-12 mx-0 p-0 partnership_player1" style={{backgroundImage: `url(${p1img[1]})`}}> </div>)}
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="row alignment">
                        {/* <div className="col-6 col-md-12 mx-0 p-0 partnership_player2" style={{backgroundImage:`url(${p2img[0]})`}}>
                            
                        </div> */}
                        {p2_1imagflag ? (
                <div className='col-6 col-md-12 mx-0 p-0 partnership_player2'>
                        <div className='banner-partnership weight'>
                            <h3>{Splitplayer2[0]}</h3>
                        </div>
                    </div>
                    ):(<div className="col-6 col-md-12 mx-0 p-0 partnership_player2" style={{backgroundImage: `url(${p2img[0]})`}}> </div>)}
                        {/* <div className="col-6 col-md-12 mx-0 p-0 partnership_player2 zindex" style={{backgroundImage:`url(${p2img[1]})`}}></div> */}
                        {p2_2imagflag ? (
                <div className='col-6 col-md-12 mx-0 p-0 partnership_player2'>
                        <div className='banner-partnership weight'>
                            <h3>{Splitplayer2[1]}</h3>
                        </div>
                    </div>
                    ):(<div className="col-6 col-md-12 mx-0 p-0 partnership_player2" style={{backgroundImage: `url(${p2img[1]})`}}> </div>)}
                    </div>
                </div>
            </div>
            {/* <div id='split-pane-or'>
                <img style="border-radius:100%;width: 60px;height: 60px;" src="versus.png" />
            </div> */}
            <div className='indicator'>
            <RightWrong status={status} restart={restart} />
            </div>
        </div>
    </div>
    );
}

export default Partnership;
