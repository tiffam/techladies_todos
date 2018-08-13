const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');

module.exports = router;

// @routes GET api/items

router.get('/', (req, res) => {
    Item.find() 
        .sort({ date: -1 }) //sort by descending order.
        .then(items => res.json(items))
});

// @routes POST api/items

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @routes UPDATE api/items/:id

router.put('/:id', (req, res) => {

    Item.update(
        { "_id": req.params.id },
        {
            $set: { "completed": true }
        }
    )
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }));
})


// @routes DELETE api/items/:id

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});
