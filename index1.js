// import cluster from "cluster";
const os = require('os')
const totalCPUs = os.cpus().length;
console.log(totalCPUs)