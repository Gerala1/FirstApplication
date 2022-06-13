const jsonArray=require('./json_converter')
const array=require('./app_array')
const lodash=require('lodash')


const json_array=jsonArray.array
const app_array=array.appArray

const concated_array=lodash.concat(json_array, app_array)


module.exports.concated_array=concated_array