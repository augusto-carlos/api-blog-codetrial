
const Posts = require('../models/Posts')

module.exports = {
    async show(req, res) {

        const posts = await Posts.find().populate('category').sort({ createdAt: 'desc'})
        return res.status(200).send(posts)

    },
    async single(req, res) {

        try {
            const { id } = req.params;
            const post = await Posts.findById(id).populate('category')

            return res.status(200).send(post)
        } catch (err) {
            return res.status(204).send({ message: 'Post not found.' })
        }

    },
    async create(req, res) {


        try {
            const { title, slug, content, category } = req.body
            const post = await Posts.create({ title, slug, content, category })

            return res.status(200).send(post)
        } catch (error) {
            return res.status(400).send({ message: 'Error adding the post.' })
        }

    },
    async update(req, res) {

        try {
            const { id } = req.params;
            const { title, slug, content, category } = req.body;

            const post = await Posts.findByIdAndUpdate(
                id,
                { title, slug, content, category },
                { useFindAndModify: false }
            )

            return res.status(200).send(post)
        } catch (err) {
            return res.status(400).send({ message: 'Edition of post failed' })
        }

    },
    async delete(req, res) {

        try {
            const post = await Posts.findByIdAndRemove(
                req.params.id,
                { useFindAndModify: false }
            );

            return res.status(200).send(post)
        } catch (err) {
            return res.status(400).send({ message: 'Fail deleting the post.' })
        }

    }
}
