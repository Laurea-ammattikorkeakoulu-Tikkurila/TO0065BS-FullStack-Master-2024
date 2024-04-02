// File: ./modules/opiskelija.js

// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const opiskelijaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    group: {
        type: String,
        required: true
    }
});

/* method to be added to the schema before compiling it with mongoose.model() */
opiskelijaSchema.methods.osaa = function osaa() {
    const greeting = this.name
        ? "Nimeni on " + this.name
        : "Minulla ei ole nimeä";
    console.log(greeting);
};


module.exports = mongoose.model('Opiskelija', opiskelijaSchema);