const si = require('systeminformation');
 
// promises style - new since version 3
// si.cpu()
// .then(data => console.log(data))
// .catch(error => console.error(error));

setInterval(()=>{

    si.cpuTemperature()
    .then(data => console.log(data))
    .catch(error => console.error(error));
    
}, 1000)


