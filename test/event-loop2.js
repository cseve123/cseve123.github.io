const process = require('process');

let clog = num => {
    return console.log(num)
}

clog(1)

setTimeout(function(){
    clog(2);
    process.nextTick(function(){
        clog(3);
    })

    new Promise(function(resolve){
        clog(4);
        resolve();
    }).then(function(){
        clog(5);
    })
})

process.nextTick(function (){
    clog(6)
})

new Promise(function(resolve){
    clog(7);
    resolve();
}).then(function(){
    clog(8);
})

setTimeout(function(){
    clog(9);
    process.nextTick(function(){
        clog(10);
    })

    new Promise(function(resolve){
        clog(11);
        resolve();
    }).then(function(){
        clog(12);
    })
})