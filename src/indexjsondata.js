const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let JsonData;
const actionArr = [
  "InitializeData",
  "getRoomById",
  "getAllRoom",
  "getChatById",
  "getAllChatInRoom",
];
const displayAction = `
Action
${actionArr
  .map((value, index) => {
    return `${index + 1} ${value}`;
  })
  .join("\n")}
Select the action: `;

const validateNumberAction = (number) => actionArr.length >= parseInt(number);

const showAction = async () => {
  try {
    rl.question(displayAction, async (actionNumber) => {
      if (validateNumberAction(actionNumber)) {
        // console.log(`${actionArr[actionNumber - 1]} ${actionNumber}`);
        if(actionNumber !== "1" && !JsonData){
          console.log('Please Initialize Data first')
        }
        else if (actionNumber === "1") {
          JsonData = require('../ChatAppRawData.json')
          console.log(JsonData)
          showAction();
        }
        else if(actionNumber === "2") {
            rl.question('getRoomById : ', (roomId) => {
                let resRoom = JsonData['room'].find((row)=>{return row.id === parseInt(roomId)})
                console.log(`>>> `, resRoom || `RoomId : ${roomId} Data not found`)
                showAction();
            })
        }
        else if(actionNumber === "3"){
          let resRoom = JsonData['room']
          console.log(`>>> `, resRoom || `Room Data not found`)
        }
        else if(actionNumber === "4"){
            rl.question('getChatById : ', async(chatId) => {
                let resChat = JsonData['chatEvent'].find((row)=>{return row.id === parseInt(chatId)})
                console.log(`>>> `, resChat || `ChatId : ${chatId} Not Found`)
                showAction();
            })
        }
        else if(actionNumber === "5"){
            rl.question('getAllChatInRoom : ', async(roomId) => {
                if(parseInt(roomId)){
                  let resChatByRoomId = JsonData['chatEvent'].filter((row)=>{return row.roomId === parseInt(roomId)}).map( row =>{ return {message:row.message}})
                    console.log((resChatByRoomId.length > 0) ? resChatByRoomId :`This roomId don't have chat`); 
                    showAction();
                }else{
                    console.log('Input invalid please insert number only')
                    showAction();
                }
            })
        }
        showAction();
      } else {
        console.log("Action invalid please try again \n");
        showAction();
      }
      // readInterface.close();
    });
  } catch (e) {
    console.log("error action", e);
    showAction();
  }
};
showAction();
