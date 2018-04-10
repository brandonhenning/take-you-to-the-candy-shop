module.exports = {
    // Uncomment these functions as you write them
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};


function candySalesToObject (array) {
    return array.reduce(object => {
        object.item = array[0]
        object.price = array[1]
        object.quantity = array[2]
        return object
    }, {})
}

function salesDayToObject (date, dataArr) {
    let sales = dataArr[date]
    let answerArr = []
    sales.reduce((accum, arr) => {
        let trans = {
            item: arr[0],
            price: arr[1],
            quantity: arr[2]
        }   
        answerArr.push(trans)
    }, [])
    let answerObj = {
        'date': date,
        'sales': answerArr
    }
    return answerObj
}



function allSalesToArray (obj) {
    return Object.keys(obj).map(date => salesDayToObject(date, obj))
}


