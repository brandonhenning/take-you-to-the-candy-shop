module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}


function getItemById (list, itemId) {
    answerArr = list.filter(function (element) {
        return element.id === itemId;
    })
    return answerArr[0]
}


function buildTransactions (salesList, itemsList) {
    return salesList.map(function (element) {
        return Object.assign(element, getItemById(itemsList, element.itemId))
    }).map(function (element) {
        delete element.id
        return element
    })
}


function getTransactionsByItemDescription (list, description) {
    return list.filter(function (element) {
        return element.description == description
    })
}


