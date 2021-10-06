export default (shops = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            // 4. Last hit reducer, return over all the old data and the new one 'payload'
            return [...shops, action.payload];

        default:
           return shops;
    }
}