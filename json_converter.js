const fs = require("fs")

const jsonArray= JSON.parse(fs.readFileSync('./data.json'))

const array =jsonArray.array



module.exports.array= array