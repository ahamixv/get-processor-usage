var cpu=reuqire('give-cpu-info');

// var num=cpu.num();//return CPU's nums

let getDetails = async function () {
    return cpu.usage((item) => {
        console.log(item)
    })
}

module.exports = {
    getDetails
}
