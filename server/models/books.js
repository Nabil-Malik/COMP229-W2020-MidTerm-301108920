/**
 * File name: books.js
 * Author's name: Nabil Malik
 * Student Id: 301108920
 * Web App name: COMP229-W2020-MidTerm-301108920
 */

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
