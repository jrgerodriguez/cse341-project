const db = require("../database/db");
const ObjectId = require('mongodb').ObjectId; //Unique object id that Mongo assigns to each document

const getAll = async (req, res) => {
    const result = await db.getDatabase().db().collection('contacts').find() //The correct databases's name was already included in th URL
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts)
    });
};

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await db.getDatabase().db().collection('contacts').find({_id: contactId}) //The correct databases's name was already included in th URL
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts[0])
    });
};

module.exports = {getAll, getSingle}

