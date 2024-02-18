import express from 'express'

import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

import { getPlayers, getPlayer, createPlayer } from './database.js'

const app = express()
// Can accept JSON body
app.use(express.json())

app.get('/players', async (req, res) => {
    const players = await getPlayers()
    res.send(players)
})

app.get('/players/:playerID', async (req, res) => {
    const playerID = req.params.playerID
    const player = await getPlayer(playerID)
    res.send(player)
})

app.post('/players', async (req, res) => {
    const { playerID, playerName, playerTag } = req.body
    const player = await createPlayer(playerID, playerName, playerTag)
    res.status(201).send(player)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })