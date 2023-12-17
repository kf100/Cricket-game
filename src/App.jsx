import test from "./dataset/Test.json"
import odi from "./dataset/ODI.json"
import t20 from "./dataset/T20.json"
// import Math;
import React, { useState, useEffect } from "react";
import { useStateWithCallback } from "./components/useStateWithCallback";
import DropDown from "./components/dropDown";
import Design from "./components/design";
import Test_batting_image from "./dataset/Test_batting_image.json"
import Test_bowling_image from "./dataset/Test_bowling_image.json"
import Test_fielding_image from "./dataset/Test_fielding_image.json"
import Test_partnership_image from "./dataset/Test_partnership_image.json"

import ODI_batting_image from "./dataset/ODI_batting_image.json"
import ODI_bowling_image from "./dataset/ODI_bowling_image.json"
import ODI_fielding_image from "./dataset/ODI_fielding_image.json"
import ODI_partnership_image from "./dataset/ODI_partnership_image.json"

import T20_batting_image from "./dataset/T20_batting_image.json"
import T20_bowling_image from "./dataset/T20_bowling_image.json"
import T20_fielding_image from "./dataset/T20_fielding_image.json"
import T20_partnership_image from "./dataset/T20_partnership_image.json"
import './App.css';


function App() {

  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");
  const [pvalue1, setpvalue1] = useState(0);
  const [pvalue2, setpvalue2] = useState(0);
  const [pmatches1, setpmatches1] = useState(0);
  const [pmatches2, setpmatches2] = useState(0);
  const [players_interest, setinterest] = useState("")
  const [score, setscore] = useState(0)
  const [clicked, setclicked] = useState(false)
  // const [High_Low,setHigh_Low]=useState()
  const [status, setStatus] = useState("inProgress")
  const [pimage1, setPimage1] = useState("")
  const [pimage2, setPimage2] = useState("")

  const [msg1_1, setmsg1_1] = useState("")
  const [msg1_2, setmsg1_2] = useState("")
  const [msg1_3, setmsg1_3] = useState("")
  const [msg2, setmsg2] = useState("")

  const [Type, setType] = useState("All")
  // const [Type,setType]=useStateWithCallback("T20")

  // let ssetplayer1=setplayer1
  // const demo={"hello world":"Hi"}

  // var data1=test[0].batting[1]['50s']
  // var ap="batting"
  // var data1=test[ap]
  // var data2=data1[1]['player']

  // getplayer(test,"batting", setplayer1)
  // setplayer1("hello")

  // var type=Math.floor(Math.random()*9)

  // function demo(){
  //   setplayer1("next")
  // }

  function start(type) {
    setStatus("inProgress")
    switch (type) {
      // switch (3){
      case 'All':
        let t = Math.floor(Math.random() * 3 + 1)
        choose(t);
        break;
      case 'Test':
        Test(1);
        break;
      case 'ODI':
        ODI(2);
        break;
      case 'T20':
        T20(3);
        break;
    }
  }

  function choose(type) {
    switch (type) {
      // switch (3){
      case 1:
        Test();
        break;
      case 2:
        ODI();
        break;
      case 3:
        T20();
        break;
    }
  }

  function Test() {
    let i = interest()
    let obj = test[i[0]]
    let players_info = getplayer(obj, i[1])

    // setplayer1(players[0])
    // setplayer1(players[1])
    setplayer1(String(players_info[0]))
    setpvalue1(players_info[1])
    // setpmatches1(players_info[2])

    setplayer2(String(players_info[2]))
    setpvalue2(players_info[3])
    // setpmatches2(players_info[5])

    getplayer(obj, i[0], i[1])
    switch (i[0]) {
      case "partnership":
        getpartnershipimage(players_info[0], 1, "Test")
        getpartnershipimage(players_info[2], 2, "Test")
        break
      default:
        getimage(String(players_info[0]), 1, i[0], "Test")
        getimage(String(players_info[2]), 2, i[0], "Test")
    }

    get_message("Test Matches", players_info, i)
    // let players_info=getplayer(obj,i[1])
    // let p=String(players_info[0])
    // let message1=players_info[0]+" has "+players_info[1]+" "+i[1]+" in Test"
    // setmsg1(message1)
    // let message2=players_info[2]+" has "
    // setmsg2(message2)

    // setplayer1(String(players_info[0]))
    // setpvalue1(players_info[1])
    // setplayer2(String(players_info[2]))
    // setpvalue2(players_info[3])
  }

  function ODI() {
    let i = interest()
    let obj = odi[i[0]]
    let players_info = getplayer(obj, i[1])
    setplayer1(String(players_info[0]))
    setpvalue1(players_info[1])
    // setpmatches1(players_info[2])

    setplayer2(String(players_info[2]))
    setpvalue2(players_info[3])
    // setpmatches2(players_info[5])

    getplayer(obj, i[0], i[1])

    switch (i[0]) {
      case "partnership":
        getpartnershipimage(players_info[0], 1, "ODI")
        getpartnershipimage(players_info[2], 2, "ODI")
        break
      default:
        getimage(String(players_info[0]), 1, i[0], "ODI")
        getimage(String(players_info[2]), 2, i[0], "ODI")
    }

    // setplayer1(players[0])
    // setplayer1(players[1])
    get_message("ODI Matches", players_info, i)
  }


  //Changes to be made yet
  function T20() {
    let i = interest()
    let obj = t20[i[0]]
    let players_info = getplayer(obj, i[1])

    // setplayer1(players[0])
    // setplayer1(players[1])
    setplayer1(String(players_info[0]))
    setpvalue1(players_info[1])
    // setpmatches1(players_info[2])

    setplayer2(String(players_info[2]))
    setpvalue2(players_info[3])
    // setpmatches2(players_info[5])

    getplayer(obj, i[0], i[1])
    switch (i[0]) {
      case "partnership":
        getpartnershipimage(players_info[0], 1, "T20")
        getpartnershipimage(players_info[2], 2, "T20")
        break
      default:
        getimage(String(players_info[0]), 1, i[0], "T20")
        getimage(String(players_info[2]), 2, i[0], "T20")
    }
    get_message("T20 Matches", players_info, i)
  }

  function get_message(Game_Type, players_info, interest) {
    switch (interest[0]) {
      case "batting":

        switch (interest[1]) {
          case "Matches":
            var message1_1 = players_info[0] + " has Played in "
            setmsg1_1(message1_1)

            var message1_2 = players_info[1]
            setmsg1_2(message1_2)

            var message1_3 = " " + Game_Type
            setmsg1_3(message1_3)

            var message2 = players_info[2] + " has "
            setmsg2(message2)
            break
          case "Ducks":
            var message1_1 = players_info[0] + " has "
            setmsg1_1(message1_1)

            var message1_2 = players_info[1]
            setmsg1_2(message1_2)

            var message1_3 = " " + interest[1] + " in " + Game_Type
            setmsg1_3(message1_3)
            var message2 = players_info[2] + " has "
            setmsg2(message2)
            break
          case "Runs":
            var message1_1 = players_info[0] + " scored "
            setmsg1_1(message1_1)

            var message1_2 = players_info[1]
            setmsg1_2(message1_2)

            var message1_3 = " Total " + interest[1] + " in " + Game_Type
            setmsg1_3(message1_3)

            var message2 = players_info[2] + " has "
            setmsg2(message2)
            break
          case "Average":
            var message1_1 = players_info[0] + " has an " + interest[1] + " of "
            setmsg1_1(message1_1)

            var message1_2 = players_info[1]
            setmsg1_2(message1_2)

            var message1_3 = " in " + Game_Type
            setmsg1_3(message1_3)
            var message2 = players_info[2] + " has "
            setmsg2(message2)
            break
          case "Centuries":
          case "Fifties":
            var message1_1 = players_info[0] + " scored "
            setmsg1_1(message1_1)

            var message1_2 = players_info[1]
            setmsg1_2(message1_2)

            var message1_3 = " " + interest[1] + " in " + Game_Type
            setmsg1_3(message1_3)
            var message2 = players_info[2] + " has "
            setmsg2(message2)
            break
        }
        break
      case "bowling":
        switch (interest[1]) {
          case "5":
            var message1_1 = players_info[0] + " has taken " + interest[1] + " wickets in an innings in "
            setmsg1_1(message1_1)

            var message1_2 = players_info[1]
            setmsg1_2(message1_2)

            var message1_3 = " " + Game_Type
            setmsg1_3(message1_3)

            var message2 = players_info[2] + " has taken " + interest[1] + " wickets in"
            setmsg2(message2)
            break

          case "Matches":
            var message1_1 = players_info[0] + " has Played in "
            setmsg1_1(message1_1)
            var message1_2 = players_info[1]
            setmsg1_2(message1_2)
            var message1_3 = " " + Game_Type
            setmsg1_3(message1_3)
            var message2 = players_info[2] + " has "
            setmsg2(message2)
            break

          case "Wickets":
            var message1_1 = players_info[0] + " has taken  "
            setmsg1_1(message1_1)
            var message1_2 = players_info[1]
            setmsg1_2(message1_2)
            var message1_3 = " total wickets in " + Game_Type
            setmsg1_3(message1_3)
            var message2 = players_info[2] + " has "
            setmsg2(message2)
            break

          case "BBI":
            var message1_1 = players_info[0] + " has "
            setmsg1_1(message1_1)

            var message1_2 = players_info[1]
            setmsg1_2(message1_2)

            var message1_3 = " Best Bowling in Innings " + interest[1] + " in " + Game_Type
            setmsg1_3(message1_3)
            var message2 = players_info[2] + " has "
            setmsg2(message2)
            break
          case "Economy":
            var message1_1 = players_info[0] + " has an Economy rate of "
            setmsg1_1(message1_1)
            var message1_2 = players_info[1]
            setmsg1_2(message1_2)
            var message1_3 = " in " + Game_Type
            setmsg1_3(message1_3)
            var message2 = players_info[2] + " has "
            setmsg2(message2)
            break
        }
        break

      case "fielding":
        var message1_1 = players_info[0] + " has taken  "
        setmsg1_1(message1_1)
        var message1_2 = players_info[1]
        setmsg1_2(message1_2)
        var message1_3 = " Total Catches in " + Game_Type
        setmsg1_3(message1_3)
        var message2 = players_info[2] + " has "
        setmsg2(message2)
        break
      case "partnership":
        var message1_1 = players_info[0] + " has Together scored "
        setmsg1_1(message1_1)
        var message1_2 = players_info[1]
        setmsg1_2(message1_2)
        var message1_3 = " " + interest[1] + " in " + Game_Type
        setmsg1_3(message1_3)
        var message2 = players_info[2] + " has "
        setmsg2(message2)
        break
      // switch(interest[1]){
      //   case "High":
      //   var message1=players_info[0]+" has made Together "+players_info[1]+" Highest Partnership runs in "+Game_Type
      //   setmsg1(message1)
      //   var message2=players_info[3]+" has "
      //   setmsg2(message2)
      //   break
      //   default:
      //     var message1=players_info[0]+" has made Together "+players_info[1]+" "+interest[1]+" in "+Game_Type
      //   setmsg1(message1)
      //   var message2=players_info[3]+" has "
      //   setmsg2(message2)
      //   break
      // }
    }
  }
  function interest() {
    var interest = Math.floor(Math.random() * 4 + 1)
    // switch (2){
    switch (interest) {
      case 1:
        let batm = batmap()
        setinterest("batting")
        return ["batting", batm]
        break;
      case 2:
        let ballm = ballmap()
        setinterest("bowling")
        return ["bowling", ballm]
        break;
      case 3:
        setinterest("fielding")
        return ["fielding", "Catches"]
        break;
      case 4:
        setinterest("partnership")
        let pm = partnermap()
        return ["partnership", pm]
        break;
    }
  }


  function getplayer(obj, achievment) {
    var p1 = Math.floor(Math.random() * obj.length)
    // setplayer1(obj[p1]['player'])
    // setpvalue1(obj[p1][achievment])
    let flag = true
    while (flag) {
      var p2 = Math.floor(Math.random() * obj.length)
      if (p1 == p2) {
        continue
      } else {
        // setplayer2(obj[p2]['player'])
        // setpvalue2(obj[p2][achievment])
        return [obj[p1]['Player'], obj[p1][achievment], obj[p2]['Player'], obj[p2][achievment]]
      }
    }

  }

  function getimage(player, player_no, interest, Type) {
    switch (Type) {
      case "Test":
        switch (interest) {
          case "batting":
            Test_batting_image.filter((data) => {
              if (player === data.player) {
                switch (player_no) {
                  case 1:
                    if (!data.image.includes(".jpg")) {
                      setPimage1(data.image)
                    }
                    break
                  case 2:
                    if (!data.image.includes(".jpg")) {
                      setPimage2(data.image)
                    }
                    break
                }
              }
            })
            break

          case "bowling":
            Test_bowling_image.filter((data) => {
              if (player === data.player) {
                switch (player_no) {
                  case 1:
                    if (!data.image.includes(".jpg")) {
                      setPimage1(data.image)
                    }
                    break
                  case 2:
                    if (!data.image.includes(".jpg")) {
                      setPimage2(data.image)
                    }
                    break
                }
              }
            })
            break

          case "fielding":
            Test_fielding_image.filter((data) => {
              if (player === data.player) {
                switch (player_no) {
                  case 1:
                    if (!data.image.includes(".jpg")) {
                      setPimage1(data.image)
                    }
                    break
                  case 2:
                    if (!data.image.includes(".jpg")) {
                      setPimage2(data.image)
                    }
                    break
                }
              }
            })
            break

        }
        break;

      case "ODI":
        switch (interest) {
          case "batting":
            ODI_batting_image.filter((data) => {
              if (player === data.player) {
                switch (player_no) {
                  case 1:
                    if (!data.image.includes(".jpg")) {
                      setPimage1(data.image)
                    }
                    break
                  case 2:
                    if (!data.image.includes(".jpg")) {
                      setPimage2(data.image)
                    }
                    break
                }
              }
            })
            break
          case "bowling":
            ODI_bowling_image.filter((data) => {
              if (player === data.player) {
                switch (player_no) {
                  case 1:
                    if (!data.image.includes(".jpg")) {
                      setPimage1(data.image)
                    }
                    break
                  case 2:
                    if (!data.image.includes(".jpg")) {
                      setPimage2(data.image)
                    }
                    break
                }
              }
            })
            break
          case "fielding":
            ODI_fielding_image.filter((data) => {
              if (player === data.player) {
                switch (player_no) {
                  case 1:
                    if (!data.image.includes(".jpg")) {
                      setPimage1(data.image)
                    }
                    break
                  case 2:
                    if (!data.image.includes(".jpg")) {
                      setPimage2(data.image)
                    }
                    break
                }
              }
            })
            break
        }
        break;
      case "T20":
        switch (interest) {
          case "batting":
            T20_batting_image.filter((data) => {
              if (player === data.player) {
                switch (player_no) {
                  case 1:
                    if (!data.image.includes(".jpg")) {
                      setPimage1(data.image)
                    }
                    break
                  case 2:
                    if (!data.image.includes(".jpg")) {
                      setPimage2(data.image)
                    }
                    break
                }
              }
            })
            break
          case "bowling":
            T20_bowling_image.filter((data) => {
              if (player === data.player) {
                switch (player_no) {
                  case 1:
                    if (!data.image.includes(".jpg")) {
                      setPimage1(data.image)
                    }
                    break
                  case 2:
                    if (!data.image.includes(".jpg")) {
                      setPimage2(data.image)
                    }
                    break
                }
              }
            })
            break
          case "fielding":
            T20_fielding_image.filter((data) => {
              if (player === data.player) {
                switch (player_no) {
                  case 1:
                    if (!data.image.includes(".jpg")) {
                      setPimage1(data.image)
                    }
                    break
                  case 2:
                    if (!data.image.includes(".jpg")) {
                      setPimage2(data.image)
                    }
                    break
                }
              }
            })
            break
        }
    }
  }

  function getpartnershipimage(player, player_no, Type) {
    var splitdata = player.split(" and ")
    // splitdata[1].replace(/\s, '')

    let symb = splitdata[1].split(" ")
    var symbol = String(symb[symb.length - 1])

    splitdata[0] = splitdata[0].trim()
    splitdata[0] = splitdata[0] + " " + symbol
    splitdata[0] = splitdata[0].trim()
    splitdata[1] = splitdata[1].trim()

    var img = []
    switch (Type) {
      case "Test":
        splitdata.forEach(element => {
          Test_partnership_image.filter((data) => {
            if (element === data.player && !img.includes(data.image)) {
              if (data.image !== undefined && !data.image.includes(".jpg")) {

                img.push(data.image)
              }
            }
          });
          if (img.length === 0) {
            img.push("")
          }
        })
        break;

      case "ODI":
        splitdata.forEach(element => {
          ODI_partnership_image.filter((data) => {
            if (element === data.player && !img.includes(data.image)) {
              if (data.image !== undefined && !data.image.includes(".jpg")) {

                img.push(data.image)
              }
            }
          });
          if (img.length === 0) {
            img.push("")
          }
        })
        break;

      case "T20":
        splitdata.forEach(element => {
          T20_partnership_image.filter((data) => {
            if (element === data.player && !img.includes(data.image)) {
              if (data.image !== undefined && !data.image.includes(".jpg")) {

                img.push(data.image)
              }
            }
          });
          if (img.length === 0) {
            img.push("")
          }
        })
        break;

    }
    switch (player_no) {
      case 1:
        setPimage1(img)
      case 2:
        setPimage2(img)
    }
  }

  function checkscore(answer) {
    if (pvalue1 === pvalue2) {
      // setscore((score)=>score+1)
      setStatus("Success")
      setclicked(true)
      setTimeout(() => { reset(); setStatus("inProgress"); setclicked(false) }, 3000)
      setTimeout(() => { start(Type); }, 3200)
      setscore((score) => score = score + 1)
    } else {
      let right_answer = eval(pvalue1) < eval(pvalue2)
      if (right_answer === answer) {
        setStatus("Success")
        setclicked(true)
        // setTimeout(()=>{reset();},2800)
        setTimeout(() => { reset(); setStatus("inProgress"); setclicked(false) }, 3000)
        setTimeout(() => { start(Type); }, 3200)
        setscore((score) => score = score + 1)
      } else {
        setStatus("Fail")
        setclicked(true)
      }
    }
  }

  function restart() {
    reset()
    setscore((0))
    start(Type)
  }
  function reset() {
    setStatus("inProgress")
    setclicked(false)
    setplayer1("")
    setplayer2("")
    setmsg1_1("")
    setmsg1_2("")
    setmsg1_3("")
    setmsg2("")
    setPimage1("")
    setPimage2("")
  }
  function change(t) {
    setType(t)
    // Call()
    // setTimeout(()=>{Call()},5000)
    // restart()
    // reset()
    // start(Type)
    // setTimeout(()=>{restart()},500)
    setTimeout(() => { reset(); setscore((0)); start(t) }, 300)
  }
  useEffect(() => {
    // setplayer1("Default")
    start(Type)
  }, []);

  // function outside(){
  // }

  return (
    <div className="App">
      {/* {player1} */}
      {/* <button onClick={demo}>getplayer</button> */}

      {/* <h1>{player1}:</h1><h1>{pvalue1}</h1>
      <h1>{player2}:</h1><h1>{pvalue2}</h1>
      <h1>{msg1}</h1>
      <h1>{msg2}:</h1>
      <button onClick={()=>checkscore(true)}>higher</button>
      <button onClick={()=>checkscore(false)}>lower</button><br></br>
      <h1>score:{score}</h1>
      <h1>{status}</h1> */}

      {/* <h1>{String(High_Low)}</h1> */}
      {/* <DropDown type={Type} setType={setType} start={start} restart={restart} reset={reset} change={change}></DropDown> */}
      <DropDown type={Type} change={change}></DropDown>
      <Design player1={player1} pvalue1={pvalue1} p1img={pimage1} player2={player2} pvalue2={pvalue2} p2img={pimage2} msg1_1={msg1_1} msg1_2={msg1_2} msg1_3={msg1_3} msg2={msg2} status={status} checkscore={checkscore} score={score} clicked={clicked} interest={players_interest} restart={restart} />
      {/* <Design player1={player1} pvalue1={pvalue1} player2={player2} pvalue2={pvalue2} player1_img={pimage1} player2_img={pimage2} status={status} setStatus={setStatus} /> */}
      {/* <Design outside={outsid   e} /> */}
    </div>
  );
}

function batmap() {
  var achivement = Math.floor(Math.random() * 7)
  switch (achivement) {
    case 0:
      return "Ducks"
      break;
    case 1:
      return "Matches"
      break;
    case 2:
      return "Runs"
      break;
    case 3:
      return "Highest Runs"
      break;
    case 4:
      return "Average"
      break;
    case 5:
      return "Centuries"
      break;
    case 6:
      return "Fifties"
      break;
  }
}

function ballmap() {
  var achivement = Math.floor(Math.random() * 5)
  switch (achivement) {
    case 0:
      return "5"
      break;
    case 1:
      return "Matches"
      break;
    case 2:
      return "Wickets"
      break;
    case 3:
      return "BBI"
      break;
    case 4:
      return "Economy"
      break;
  }
}

function partnermap() {
  var achivement = Math.floor(Math.random() * 4)
  switch (achivement) {
    case 0:
      return "Total Partnership Runs"
      break;
    case 1:
      return "Highest Partnership Runs"
      break;
    case 2:
      return "Centuries"
      break;
    case 3:
      return "Fifties"
      break;
  }
}

export default App;
