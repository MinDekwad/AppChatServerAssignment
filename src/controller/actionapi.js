 

const {dataSource} = require("../connect");
const Room = require("../entity/Room");
const Chatevent = require("../entity/Chatevent");

const InitializeData = async () => {
    try {
  
      let data = await dataSource
              .getRepository(Room)
              .createQueryBuilder("room")
              .getMany()
    
      if(data.length > 0){
          console.log(">>> Data is duplicate")
          return { status : 'fail', responseText : 'Data is duplicate'};
      }
      else{
          let jsonData = require("../../ChatAppRawData.json");
          await dataSource
          .createQueryBuilder()
          .insert()
          .into(Room)
          .values(jsonData.room)
          .execute();
          console.log("insert table room success", jsonData.room);
           
          await dataSource
          .createQueryBuilder()
          .insert()
          .into(Chatevent)
          .values(jsonData.chatEvent)
          .execute();
          console.log("insert table chatevent success", jsonData.chatEvent);
          console.log(`>>> Initial success`);

          return { status :'success', responseText : 'Initial success' };
      }
    } catch (e) {
      console.log("err" + e);
    }
}
const getRoomById = async (roomId) => {
      try {
          return await dataSource
          .getRepository(Room)
          .createQueryBuilder("room")
          .where("room.id = :id", { id: roomId })
          .getOne()
      } catch (e) {
          console.log("err"+e);
      }
}
const getAllRoom = async () => {
      try {
          return await dataSource
              .getRepository(Room)
              .createQueryBuilder("room")
              .getMany()
      } catch (e) {
          console.log("err"+e); 
      }
}
const getChatById = async (chatId) => {
      try {
          return await dataSource
          .getRepository(Chatevent)
          .createQueryBuilder("chatevent")
          .where("chatevent.id = :id", { id: chatId })
          .getOne()
      } catch (e) {
          console.log("err"+e);
      }
}
const getAllChatInRoom = async (roomId) => {
      try {
          return await dataSource
          .getRepository(Chatevent)
          .createQueryBuilder("chatevent")
          // .select(["chatevent.id", "chatevent.message"])
          .select(["chatevent.message"])
          .where("chatevent.roomId = :id", { id: roomId })
          .getMany()
      } catch (e) {
          console.log("err"+e); 
      }
}
module.exports = {
    InitializeData,
    getRoomById,
    getAllRoom,
    getChatById,
    getAllChatInRoom
}