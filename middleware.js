
const { Feed } = require('./app/models')

const findAndSetFeedById = async (req, res, next) => {
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
 findAndSetFeedById
}