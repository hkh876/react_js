const INIT_GARAGE_DATA = {
    'projects': [
        {
            'id': 1,
            'title': 'Chichen Itza',
            'description': 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
            'image_path': 'https://thetejasmagade.github.io/bulma-blocks-examples/example-2/images/project-1.jpg',
        },
        {
            'id': 2,
            'title': 'Colosseum Roma',
            'description': 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
            'image_path': 'https://thetejasmagade.github.io/bulma-blocks-examples/example-2/images/project-2.jpg',
        },
        {
            'id': 3,
            'title': 'Great Pyramid of Giza',
            'description': 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
            'image_path': 'https://thetejasmagade.github.io/bulma-blocks-examples/example-2/images/project-3.jpg',
        },
        {
            'id': 4,
            'title': 'San Francisco',
            'description': 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
            'image_path': 'https://thetejasmagade.github.io/bulma-blocks-examples/example-2/images/project-4.jpg',
        }
    ],
    'services': [
        {
            'id': 1,
            'title': 'Air Conditioning',
            'description': 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
            'icon_class': 'fas fa-sync',
            'color': 'danger',
            'link_to': '#',
        },
        {
            'id': 2,
            'title': 'Brake Repair',
            'description': 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
            'icon_class': 'fas fa-car',
            'color': 'danger',
            'link_to': '#',
        },
        {
            'id': 3,
            'title': 'Lube, Oil and Filters',
            'description': 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
            'icon_class': 'fas fa-thumbs-up',
            'color': 'danger',
            'link_to': '#',
        },
        {
            'id': 4,
            'title': 'Belts and Hoses',
            'description': 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
            'icon_class': 'fas fa-award',
            'color': 'danger',
            'link_to': '#',
        },
        {
            'id': 5,
            'title': 'Engine Diagnostics',
            'description': 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
            'icon_class': 'fas fa-cog',
            'color': 'danger',
            'link_to': '#',
        },
        {
            'id': 6,
            'title': 'Wheel Service',
            'description': 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
            'icon_class': 'fas fa-chart-pie',
            'color': 'danger',
            'link_to': '#',
        },
    ],
    'teams': [
        {
            'id': 1,
            'image_path': 'https://reqres.in/img/faces/1-image.jpg',
            'name': 'Holden Caulfield',
            'job': 'Automobile Engineer',
        },
        {
            'id': 2,
            'image_path': 'https://reqres.in/img/faces/2-image.jpg',
            'name': 'Henry Letham',
            'job': 'Mechanic',
        },
        {
            'id': 3,
            'image_path': 'https://reqres.in/img/faces/3-image.jpg',
            'name': 'Oskar Blinde',
            'job': 'Founder',
        },
        {
            'id': 4,
            'image_path': 'https://reqres.in/img/faces/11-image.jpg',
            'name': 'John Doe',
            'job': 'Automobile Engineer',
        },
        {
            'id': 5,
            'image_path': 'https://reqres.in/img/faces/5-image.jpg',
            'name': 'Tejas Magade',
            'job': 'Creator',
        },
        {
            'id': 6,
            'image_path': 'https://reqres.in/img/faces/6-image.jpg',
            'name': 'Martin Eden',
            'job': 'Automobile Engineer',
        },
        {
            'id': 7,
            'image_path': 'https://reqres.in/img/faces/10-image.jpg',
            'name': 'Atticus Finch',
            'job': 'Mechanic',
        },
        {
            'id': 8,
            'image_path': 'https://reqres.in/img/faces/9-image.jpg',
            'name': 'Alper Kamu',
            'job': 'Mechanic',
        },
        {
            'id': 9,
            'image_path': 'https://reqres.in/img/faces/4-image.jpg',
            'name': 'Rodrigo Monchi',
            'job': 'Product Manager',
        },
    ],
    'new_blog_info': [
        {
            'id': 1,
            'category': 'CATEGORY',
            'title': 'Book Your Consultation Free',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'link_to': '#',
            'view_count': '1.5k',
            'reply_count': 5,
        },
        {
            'id': 2,
            'category': 'CATEGORY',
            'title': 'Change the Color of the Car',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'link_to': '#',
            'view_count': '1.5k',
            'reply_count': 5,
        },
        {
            'id': 3,
            'category': 'CATEGORY',
            'title': 'Over-Exhausted Car Engines',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'link_to': '#',
            'view_count': '1.5k',
            'reply_count': 5,
        },
    ]
}

function GarageReducer(state=INIT_GARAGE_DATA, action) {
    return state
}

export default GarageReducer
