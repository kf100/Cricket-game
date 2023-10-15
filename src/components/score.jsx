import React, { useState,useEffect } from 'react';
import "../css/design.css"

const Score = (props) => {
    // const forceUpdate = React.useCallback(() => updateState({}), []);
    const[previousScore,setPreviousScore]=useState(-1)
    // let previousScore=-1
    
    // useEffect(() => {
    // if(props.score!==previousScore){
    //     setPreviousScore(props.score)
    //       // Trigger your animation here
    //     }
    // }, [props.score]);
    // let previousScore=-1
    // if(score!==previousScore){
        //     previousScore=score
        // forceUpdate()
        if(props.score!==previousScore){
            setPreviousScore(props.score)
              // Trigger your animation here
              return (
                  <div>
                      <h3 className='score term-keyword__keyword'>Score:{props.score}</h3>
                  </div>
              );
            }else{
                return (
                    <div>
                        <h3 className='score  term-keyword__keyword'>Score:{props.score}</h3>
                    </div>
                );

            }
    }



export default Score;
