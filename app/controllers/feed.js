const { Feed } = require('./../models');
const list = async (req, res) => {
    const { category } = req.query
    
    if (category) {
        const filtered = await Feed.findAll({ where: { category } });
        res.status(200).json(filtered);
        return;
    }
    const result = await Feed.findAll();
    res.status(200).json(result);
}

const create = async (req, res) => {
    try {
        const body = req.body;
        
        const result = await Feed.create(body)
        
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const update = async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.feed;

        const [_, data] = await Feed.update(body, { where: { id }, returning: true })
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const destroy = async (req, res) => {
    try {
        const id = req.feed.id;
        await Feed.destroy({ where: { id } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const detail = (req, res) => {
    res.json(req.feed);
}


const findAndSetById = async (req, res, next) => {
    const id = req.params.id;
    const feed = await Feed.findByPK(id);
    try {
        if (!feed) {
            res.status(404).json({
                message: 'Feed not found!',
            })
        }

        req.feed = feed;
        next();
    } catch (err) {
        res.status(402).json({
            message: err.message
        })
    }
}

module.exports = {
    list,
    create,
    update,
    destroy,
    detail,
    findAndSetById
}