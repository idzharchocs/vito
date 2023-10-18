const { Feed } = require('./models');
// const { v4: uuidv4 } = require('uuid');
// get data
// const getAllFeeds = async () => {
//     const data = await Feed.findByPk('2d8f042c-e536-4b3b-b0c2-bcc8a28c3ab5');
//     console.log(data);
// }
// getAllFeeds();


// // Feed.findAll().then((data)=>{ console.log(data)}).catch((err)=>{console.log(err)})

// create data baru
// Feed.create({title:'new title', content:'new content', category:'new category',createdAt:new Date(), updatedAt: new Date()}).then((data)=> {console.log(data)}).catch((err)=>{console.log(err)})

// create dengan banyak data

// const id = uuidv4()
// Feed.bulkCreate([
//     { title: 'new title2', content: 'new content', category: 'new category', createdAt: new Date(), updatedAt: new Date() },
//     { title: 'new title3', content: 'new content', category: 'new category', createdAt: new Date(), updatedAt: new Date() }])
// .then((data) => { console.log(data) })
// .catch((err) => { console.log(err) })


    // update
    Feed.update(
        { title: 'title updated', content: 'content update', category: ' category update' },
        { where: { id: '2d8f042c-e536-4b3b-b0c2-bcc8a28c3ab5' } })
        .then((data) => { console.log(data) })
        .catch((err) => { console.log(err) });

// delete

    Feed.destroy({ where: { id: 'ed55001d-5c3a-4669-9492-193c1aca48fc' } })
        .then((data) => { console.log(data) })
        .catch((err) => { console.log(err) });
