const { Feed } = require('./app/models');
const handleListfeeds = async (req, res) => {
    const { category } = req.query
    
    if (category) {
        const filtered = await Feed.findAll({ where: { category } });
        res.status(200).json(filtered);
        return;
    }
    const result = await Feed.findAll();
    res.status(200).json(result);
}

const handleCreateFeed = async (req, res) => {
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

const handleUpdatedFeed = async (req, res) => {
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

const handleDeleteFeed = async (req, res) => {
    try {
        const id = req.feed.id;
        await Feed.destroy({ where: { id } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const handleGetDetailFeed = (req, res) => {
    res.json(req.feed);
}

module.exports = {
    handleListfeeds,
    handleCreateFeed,
    handleUpdatedFeed,
    handleDeleteFeed,
    handleGetDetailFeed
}