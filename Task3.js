const mongoose = require('mongoose');

const schema = new  mongoose.Schema({
    id: Number,
    name: String,
    birthday: String,
    occupation: Array,
    img: String,
    status: String,
    nickname: String,
    appearance: Array,
    portrayed: String,
    category: Array
})

mongoose.model("db", schema);

const character = new db({
    id: "smth"
})

character.save().then(() => console.log(character))

mongoose.connect("mongodb://localhost/db");
