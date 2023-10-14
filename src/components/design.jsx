import React from 'react';
import "../css/design.css";
import Partnership from './partnership';
import NonPartnership from './non-partnership';
// import p1 from "./player1.png"

// import p2 from "./player2.png"
// const p1="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320300/320345.png"
// const p2="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png"
// const Design = ({player1,pvalue1,player2,pvalue2,player1_img,player2_img,status,status,setStatus}) => {
//    if(status==="")
function Design({ player1, pvalue1, p1img, player2, pvalue2, p2img, msg1_1, msg1_2, msg1_3, msg2, status, checkscore, score, clicked, interest, restart }) {
    // os()
    // const [p2v,setp2v]=useState(0)
    // function iterate(){
    //     for(var i=0;i<=pvalue2;i++){
    //         setp2v(i)
    //         console.log("hiewfoge")
    //     }
    // }
    // const p1img=""
    // const p2img=""
    // console.log(player1)
    // console.log(player2)
    // const p1img=bowling.filter((data)=>{
    //     if(data.player===player1){
    //         // console.log(data.image)
    //         return data
    //     }
    // })
    if (interest !== "partnership") {

        // iterate()
        
        return (
            <NonPartnership player1={player1} pvalue1={pvalue1} p1img={p1img} player2={player2} pvalue2={pvalue2} p2img={p2img} msg1_1={msg1_1} msg1_2={msg1_2} msg1_3={msg1_3} msg2={msg2} status={status} checkscore={checkscore} score={score} clicked={clicked} restart={restart} />
        );
    } else {
        console.log("partnership")
        return (
            <Partnership player1={player1} pvalue1={pvalue1} p1img={p1img} player2={player2} pvalue2={pvalue2} p2img={p2img} msg1_1={msg1_1} msg1_2={msg1_2} msg1_3={msg1_3} msg2={msg2} status={status} checkscore={checkscore} score={score} clicked={clicked} restart={restart} />
        )
    }
}

export default Design;
