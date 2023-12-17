import React from 'react';
import "../css/design.css";
import Partnership from './partnership';
import NonPartnership from './non-partnership';

function Design({ player1, pvalue1, p1img, player2, pvalue2, p2img, msg1_1, msg1_2, msg1_3, msg2, status, checkscore, score, clicked, interest, restart }) {
   
    if (interest !== "partnership") {

        return (
            <NonPartnership player1={player1} pvalue1={pvalue1} p1img={p1img} player2={player2} pvalue2={pvalue2} p2img={p2img} msg1_1={msg1_1} msg1_2={msg1_2} msg1_3={msg1_3} msg2={msg2} status={status} checkscore={checkscore} score={score} clicked={clicked} restart={restart} />
        );
    } else {
        return (
            <Partnership player1={player1} pvalue1={pvalue1} p1img={p1img} player2={player2} pvalue2={pvalue2} p2img={p2img} msg1_1={msg1_1} msg1_2={msg1_2} msg1_3={msg1_3} msg2={msg2} status={status} checkscore={checkscore} score={score} clicked={clicked} restart={restart} />
        )
    }
}

export default Design;
