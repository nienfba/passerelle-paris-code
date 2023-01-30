// 1er

const pause = new Promise((resolve,reject)=>{
    window.setTimeout(() => reject('Ok'),3000);
});


pause
.then(message=>console.log(message))
.catch(message => {throw new Error(message)});

// 2eme
function haveBreak(time) {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => resolve('Ok'), time);
    });
}

haveBreak(5000).then(message=>console.log(message));