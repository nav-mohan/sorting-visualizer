const asyncSetTimeout = ({waitTime})=>{
    console.log(waitTime)
    return new Promise ((resolve,reject) => {
        return setTimeout(()=>resolve(), waitTime)
    });

}

export default asyncSetTimeout;