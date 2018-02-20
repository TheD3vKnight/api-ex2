// ReadFileSync and WriteFileSync are built into Node
// The base method is readFile and writeFile. The "Sync" stands for syncronous. 
// Reference : base readFile method - https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
// base writFile method - https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
// This means the method will ensure your code executes syncronously vs asyncronously

//Step 1 - Read contents of devices.json -- see above reference
let devices = require('./devices.json')
let fs = require('fs')
let path = require('path')

//Step 2 - Once you have read the contents of the file grap the specs object (look at devices.json) 
/*
fs.readFile(path.join(__dirname,'devices.json'), 'utf-8', (err,data) => {
  console.log(data.toString())
})
*/
/*
let content = fs.readFileSync(path.join(__dirname,'devices.json')).toString()

console.log(content)
*/
//Step 3 Print specs to console
let obj = devices

obj.forEach((device) => {
  if (device.name == 'Raspberry Pi') {
    device.specs.memory = '2GB'
    device.specs.os = 'mac OSX'
  }
  if (device.name == 'DragonBoard') {
    device.specs.memory = '4GB'
    device.specs.os = 'Linux'
    device.specs.price = '$40.00'
  }
})
console.log(obj)
//writeFileSync using obj instead of devices

fs.writeFileSync('devices.json', JSON.stringify(obj), (err) => {
  if (err) throw err
  console.log('The file has been saved!')
})


