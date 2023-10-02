const orders = [
    {
        date: '2005-05-05',
        subtotal: 85.62,
        items: [{
            product: {
                id: 'redshoe',
                description: 'Old Red Shoe',
                price: 42
            },
            quantity: 1,
        }]
    }
];

function getAllOrders() {
    return orders;
};

module.exports = {
    getAllOrders
};