const INIT_SHOT_DATA = {
    'products': [
        {
            'id': 1,
            'file_name': '1.jpg',
            'category': 'CATEGORY',
            'title': 'Blue Men\'s Jacket',
            'price': '$ 28.25',
        },
        {
            'id': 2,
            'file_name': '2.jpg',
            'category': 'CATEGORY',
            'title': 'Navy Blue Shirt',
            'price': '$ 26.25',
        },
        {
            'id': 3,
            'file_name': '3.jpg',
            'category': 'CATEGORY',
            'title': 'Pack of 10 T-Shirts',
            'price': '$ 55.26',
        },
        {
            'id': 4,
            'file_name': '4.jpg',
            'category': 'CATEGORY',
            'title': 'Couple T-Shirts',
            'price': '$ 18.95',
        },
        {
            'id': 5,
            'file_name': '5.jpg',
            'category': 'CATEGORY',
            'title': 'Yellow Men\'s Jacket',
            'price': '$ 23.27',
        },
        {
            'id': 6,
            'file_name': '6.jpg',
            'category': 'CATEGORY',
            'title': 'Plain White T-Shirt',
            'price': '$ 25.25',
        },
        {
            'id': 7,
            'file_name': '7.jpg',
            'category': 'CATEGORY',
            'title': 'Plain Brown T-Shirt',
            'price': '$ 38.25',
        },
        {
            'id': 8,
            'file_name': '8.jpg',
            'category': 'CATEGORY',
            'title': 'Stripped Unisex Shirt',
            'price': '$ 28.25',
        },
    ],
}

function ShopReducer(state=INIT_SHOT_DATA, action) {
    return state
}

export default ShopReducer