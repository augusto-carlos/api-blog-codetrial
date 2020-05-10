const Users = require('../models/Users')

module.exports = {
    async show(req, res) {

        try {
            const users = await Users.find().sort('name')

            return res.status(200).send(users)
        } catch (err) {
            return res.status(204).send({ message: 'Error finding users.' })
        }

    },
    async single(req, res) {

        try {
            const { id } = req.params
            const user = await Users.findById(id)

            return res.status(200).send(user)
        } catch (err) {
            return res.status(204).send({ message: 'User not found.' })
        }

    },
    async create(req, res) {

        try {
            const { name, email, password } = req.body
            const user = await Users.create({ name, email, password })
            
            return res.status(200).send(user)
        } catch (err) {
            return res.status(400).send({ message: 'Error creating user.' })
        }

    },
    async update(req, res) {

        try {
            const { id } = req.params
            const { name, email, password } = req.body
            const user = await Users.findByIdAndUpdate(
                id,
                { name, email, password },
                { useFindAndModify: false }
            )

            return res.status(200).send(user)
        } catch (err) {
            return res.status(400).send({ message: 'Error editing user.' })
        }

    },
    async delete(req, res) {

        try {
            const { id } = req.params
            const user = await Users.findByIdAndRemove(id, { useFindAndModify: false })

            return res.status(200).send(user)
        } catch (err) {
            return res.status(400).send({ message: 'Error deleting user.' })
        }

    }

}


