const pause = new Promise((valid,reject)=>{
    window.setTimeout(()=>valid('Ok'),3000);
});


pause.then(message=>console.log(message));


function haveBreak(time) {
    return new Promise((valid, reject) => {
        window.setTimeout(() => valid('Ok'), time);
    });
}

haveBreak(5000).then(message=>console.log(message));