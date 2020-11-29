/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
import React from "react";
import styled from "styled-components";
import champions from "../champion.json"
import queues from "../queues.json"

const Icon = styled.img`
    border-radius: 50%;
    height: 100px;
    widht: 100px;
`

const getObjects = (obj, key, val) => {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));    
        } else 
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
}
const timeConverter = (timestamp) => {
    var a = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + ' ' + month  + ' ' + hour + ':' + min
    return time;
  }
  console.log(timeConverter(0));
    const TableRow = (matches) =>{
        return matches.map((match, index) => {
            const { champion, queue, role, lane, timestamp, gameId } = match 
            const championInfo = getObjects(champions.data, "key", champion);

            const queueType = queues.filter(obj => obj.queueId === queue)[0].description

           return (
              <tr key={gameId}>
                 <Icon src={window.location.origin + `/img/game/champion/${championInfo[0].id}.png`}/>
                 <td>{queueType}</td>
                 <td>{role}</td>
                 <td>{lane === "NONE" ? queueType : lane}</td>
                 <td>{timeConverter(timestamp)}</td>
              </tr>
           )
        })
}

const MatchlistTable = ( {matchlist} ) => {
    console.log("error", matchlist)
  return (
    <div>
      <h1 id="title">Matchlist table</h1>
      <table id="matches">
        <tbody>{TableRow(matchlist.matches)}</tbody>
      </table>
    </div>
  );
};

export default MatchlistTable;
