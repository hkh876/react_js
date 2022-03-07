const INIT_EDUCATION_DATA = {
    'testimonials': [
        {
            'id': 1,
            'image_path': 'https://reqres.in/img/faces/7-image.jpg',
            'description': 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
            'name': 'HOLDEN CAULFIELD',
            'job': 'Senior Product Designer',
        },
        {
            'id': 2,
            'image_path': 'https://reqres.in/img/faces/8-image.jpg',
            'description': 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
            'name': 'ALPER KAMU',
            'job': 'UI Developer',
        },
        {
            'id': 3,
            'image_path': 'https://reqres.in/img/faces/9-image.jpg',
            'description': 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
            'name': 'HENRY LETHAM',
            'job': 'CTO',
        },
    ],
    'institutions': [
        {
            'id': 1,
            'file_name': 'content-1.jpg',
            'title': 'Book Library',
            'description': 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
            'link_to': '#',
        },
        {
            'id': 2,
            'file_name': 'content-2.jpg',
            'title': 'Best Teachers',
            'description': 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
            'link_to': '#',
        },
        {
            'id': 3,
            'file_name': 'content-3.jpg',
            'title': 'Certification',
            'description': 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
            'link_to': '#',
        },
    ],
    'courses': [
        {
            'id': 1,
            'file_name': 'ec-1.jpg',
            'title': 'Neural Networking',
            'rating': 4,
            'price': '$ 65.00',
            'description': 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing.',
            'discount_price': '$ 55.00',
        },
        {
            'id': 2,
            'file_name': 'ec-2.jpg',
            'title': 'Computer Science',
            'rating': 5,
            'price': '$ 100.00',
            'description': 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing.',
            'discount_price': '$ 80.00',
        },
        {
            'id': 3,
            'file_name': 'ec-3.jpg',
            'title': 'Accounting',
            'rating': 3,
            'price': '$ 85.00',
            'description': 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing.',
            'discount_price': '$ 90.00',
        },
        {
            'id': 4,
            'file_name': 'ec-4.jpg',
            'title': 'Communication',
            'rating': 4,
            'price': '$ 65.00',
            'description': 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing.',
            'discount_price': '$ 55.00',
        },
        {
            'id': 5,
            'file_name': 'ec-5.jpg',
            'title': 'Psychology',
            'rating': 5,
            'price': '$ 90.00',
            'description': 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing.',
            'discount_price': '$ 75.00',
        },
        {
            'id': 6,
            'file_name': 'ec-6.jpg',
            'title': 'Electrical Engineering',
            'rating': 5,
            'price': '$ 100.00',
            'description': 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing.',
            'discount_price': '$ 83.00',
        },
        {
            'id': 7,
            'file_name': 'ec-7.jpg',
            'title': 'Spoken English',
            'rating': 3,
            'price': '$ 35.00',
            'description': 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing.',
            'discount_price': '$ 30.00',
        },
        {
            'id': 8,
            'file_name': 'ec-8.jpg',
            'title': 'Graphics Designing',
            'rating': 4,
            'price': '$ 50.00',
            'description': 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing.',
            'discount_price': '$ 42.00',
        },

    ]
}

function EducationReducer(state=INIT_EDUCATION_DATA, action) {
    return state
}

export default EducationReducer