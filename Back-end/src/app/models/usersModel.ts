
import knex from '@src/database/knex'

class UserModel {
    async insertUser(
        phone: String,
        profile: String,
        name: String,
        email: String,
        city: String,
        state: String,
        street: String,
        district: String,
        country: String,
        numberAddress: String,
        latitude: String,
        longitude: String,
        password: String,
        profileImage: any,
        receiving: any,
        description: String,
        cnpj: String,
    ) {
        const fk_country = await knex('tb_country')
            .insert({
                country
            })

        const fk_state = await knex('tb_state')
            .insert({
                state,
                fk_country
            })

        const fk_city = await knex('tb_city')
            .insert({
                city,
                fk_state
            })

        const fk_district = await knex('tb_district')
            .insert({
                district,
                fk_city
            })

        const fk_address = await knex('tb_address')
            .insert({
                numberAddress,
                street,
                fk_district
            })

        const resultRegiterUser = await knex('tb_users')
            .insert({
                phone,
                password,
                profile,
                name,
                email,
                latitude,
                longitude,
                fk_address,
                profileImage: JSON.stringify(profileImage),
                receiving: JSON.stringify(receiving),
                description,
                cnpj
            })
            .returning('*')

        return resultRegiterUser
    }
    async getUserRegister(phone: String) {
        const resultUser = await knex('tb_users')
            .select('*')
            .where('phone', phone)

        return resultUser
    }

    async getUserRegisterId(id: Number) {
        const resultUser = await knex('tb_users')
            .select('*')
            .where('id', id)

        return resultUser
    }

}

export default new UserModel()