
const Categories = require('../models/Categories')

module.exports = {
    async show(req, res) {

        try {
            const categories = await Categories.find().sort('name')

            return res.status(200).send(categories)
        } catch (err) {
            return res.status(204).send({ message: 'Error finding categories.' })
        }

    },
    async single(req, res) {

        try {
            const { id } = req.params
            const category = await Categories.findById(id)

            return res.status(200).send(category)
        } catch (err) {
            return res.status(204).send({ message: 'Category not found.' })
        }

    },
    async create(req, res) {

        try {
            const { name, slug, description } = req.body
            const category = await Categories.create({ name, slug, description })

            return res.status(200).send(category)
        } catch (err) {
            return res.status(400).send({ message: 'Error creating category.' })
        }

    },
    async update(req, res) {

        try {
            const { id } = req.params
            const { name, slug, description } = req.body
            const category = await Categories.findByIdAndUpdate(
                id,
                { name, slug, description },
                { useFindAndModify: false }
            )

            return res.status(200).send(category)
        } catch (err) {
            return res.status(400).send({ message: 'Error editing category.' })
        }

    },
    async delete(req, res) {

        try {
            const { id } = req.params
            const category = await Categories.findByIdAndRemove(id, { useFindAndModify: false })

            return res.status(200).send(category)
        } catch (err) {
            return res.status(400).send({ message: 'Error deleting category.' })
        }

    }
}
