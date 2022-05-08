const actionController = require("./controller/action");
 
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
        if (actionNumber === "1") {
          await actionController.InitializeData();
          showAction();
        }
        else if(actionNumber === "2") {
            rl.question('getRoomById : ', async(roomId) => {
                let resRoom = await actionController.getRoomById(roomId);
                console.log(`>>> `, resRoom || `RoomId : ${roomId} Data not found`)
                showAction();
            })
        }
        else if(actionNumber === "3"){
            let resAllRoom = await actionController.getAllRoom();
            let resAllRoomObj =  JSON.stringify(resAllRoom);
            console.log(`>>> `, {...[...resAllRoom]});
            console.log(`>>> ${resAllRoomObj}`);
        }
        else if(actionNumber === "4"){
            rl.question('getChatById : ', async(chatId) => {
                let resChat = await actionController.getChatById(chatId);
                console.log(`>>> `, resChat || `ChatId : ${chatId} Not Found`);
                showAction();
            })
        }
        else if(actionNumber === "5"){
            rl.question('getAllChatInRoom : ', async(roomId) => {
                if(parseInt(roomId)){
                    let resChatByRoomId = await actionController.getAllChatInRoom(roomId)
                    // console.log(`>>> `,resChatByRoomId || `This room ${roomId} don't have chat`)
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
