export default {
  Query: {
    games: async (parent, args, { models }) => {
      const games = await models.Game.find({})
      console.log(games)
      return games
    }
  },
  Mutation: {
    createGame: async (parent, { name, type, author }, { models }) => {
      const Game = await models.Game.findOne({ name })

      if (Game) {
        throw new Error('Please provide a unique name.')
      }
      
      // create a new Game
      const newGame = new models.Game({
        name,
        type,
        author
      })

      // save the Game
      try {
        await newGame.save()
      } catch (e) {
        throw new Error('Cannot Save Game!!!')
      }

      return true
    }
  }
}
