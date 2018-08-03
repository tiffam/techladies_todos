const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');

module.exports = router;

// @routes GET api/items
// @desc Get all items
// @access  Public

router.get('/', (req, res) => {
    Item.find() //returns a promise
    .sort({ date: -1 }) //sort by descending order.
    .then(items => res.json(items))
});

// @routes POST api/items
// @desc Create An Item
// @access  Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});


// @routes DELETE api/items/:id
// @desc Create An Item
// @access  Public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});
