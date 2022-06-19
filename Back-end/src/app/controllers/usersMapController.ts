import GetUsersMapModel from '@models/userMapModel'

class UsersMap {
    async getUsers(request, response) {
        const {
            typeProfile
        } = request.query

        try {
            let filterUser = []
            if (typeProfile === "donor") {
                filterUser.push("needHelp")
                filterUser.push("institution")
            } else if (typeProfile === "needHelp") {
                filterUser.push("institution")
            }
            else if (typeProfile === "institution") {
                filterUser.push("needHelp")
            }
            const resultData = await GetUsersMapModel.getUsers(filterUser)

            return response.status(200).json({ resultData })
        } catch (error) {
            console.log(error)
            return response.status(500).json({ error })
        }
    }

}
export default new UsersMap()