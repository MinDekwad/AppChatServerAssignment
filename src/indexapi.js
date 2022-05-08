const express = require('express')
const actionControllerApi = require('./controller/actionapi')
const app = express()
const port = 3000

app.post('/api/v1/initial', async (req, res) => {
  const resData = await actionControllerApi.InitializeData()
  res.json(resData)
})

app.get('/api/v1/getRoomById/:roomId', async(req, res) => {
  try {
    const resRoomData = await actionControllerApi.getRoomById(req.params.roomId)
    res.status(200).json(resRoomData|| {status: 'error', responseText: 'This room not found'})
  } catch (error) {
    console.log(error)
    res.status(500).json({ status :'error', responseText : error.toString() })
  }
})

app.get('/api/v1/getAllRoom', async(req, res) => {
  try {
    const resAllRoom = await actionControllerApi.getAllRoom()
    res.status(200).json(resAllRoom || { status : 'error', responseText : 'Room Data not found'})
  } catch (error) {
    res.status(500).json({ status :'error', responseText : error.toString() })
  }
})

app.get('/api/v1/getChatById/:chatId', async(req, res) => {
  try {
    const resChatById = await actionControllerApi.getChatById(req.params.chatId)
    res.status(200).json(resChatById || {status :'error', responseText : 'This chat id not found'})
  } catch (error) {
    res.status(500).json({ status :'error', responseText : error.toString() })
  }
})

app.get('/api/v1/getAllChatInRoom/:roomId', async(req, res) => {
  try {
    const resAllChatInRoom = await actionControllerApi.getAllChatInRoom(req.params.roomId)
    // res.status(200).json(resAllChatInRoom || {status : 'error', responseText : `This roomId don't have chat`})
    res.status(200).json(resAllChatInRoom.length > 0 ? resAllChatInRoom : {status : 'error', responseText : `This roomId don't have chat`})
    // console.log((resChatByRoomId.length > 0) ? resChatByRoomId :`This roomId don't have chat`);
  } catch (error) {
    res.status(500).json({ status :'error', responseText : error.toString() })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})