import UserInteractionsModel from '@models/userInteractionsModel'

class UsersInteraction {

  async filterUser(request, response){
    const {
      id
  } = request.query

    try {
        const userFilter = await UserInteractionsModel.getUserFilter(id)

        return response.status(200).json(userFilter) 
    } catch (error) {
      console.log(error)
      return response.status(500).json({ error })
    }
  }
}
export default new UsersInteraction()