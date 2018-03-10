module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    addTotalValueToItems
}


function getTotalItemSales (list, id) {
    return list.filter((element) => {
        return element.itemId === (id)
    }).reduce((total, element) => {
        total += element.quantity
        return total
    }, 0)
}


function addTotalSalesToItems (salesList, itemsList) {
    return itemsList.map((element) => {
        element.quantity = getTotalItemSales(salesList, element.id)
        return element
    })
}


function addTotalValueToItems (salesList, itemsList) {
    return addTotalSalesToItems(salesList, itemsList).map((element) => {
        element.totalValue = (element.quantity * element.price).toFixed(2)
        return element
    })
}


