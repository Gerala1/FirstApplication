const concated_array=require("./array_concat")


const concatedArray=concated_array.concated_array

let sum=0;



concatedArray.forEach(element => sum += element)

module.exports.sum=sum