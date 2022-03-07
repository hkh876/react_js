const INIT_HOSTING_DATA = {
    'services': [
        {
            'id': 1,
            'title': 'Firewall',
            'description': 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
            'icon_class': 'far fa-user',
            'color': 'primary',
            'link_to': '#',
        },
        {
            'id': 2,
            'title': 'Data Protection',
            'description': 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
            'icon_class': 'far fa-flag',
            'color': 'primary',
            'link_to': '#',
        },
        {
            'id': 3,
            'title': 'Cheap Hosting',
            'description': 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
            'icon_class': 'fas fa-chart-line',
            'color': 'primary',
            'link_to': '#',
        },
    ],
    'price_infos': [
        {
            'id': 1,
            'title': 'START',
            'price': 'Free',
            'options': [
                'Vexillologist pitchfork',
                'Tumeric plaid portland',
                'Mixtape chillwave tumeric',
            ],
            'is_popular': false,
        },
        {
            'id': 2,
            'title': 'PRO',
            'price': '$38',
            'options': [
                'Vexillologist pitchfork',
                'Tumeric plaid portland',
                'Hexagon neutra unicorn',
                'Mixtape chillwave tumeric',
            ],
            'is_popular': true,
        },
        {
            'id': 3,
            'title': 'BUSINESS',
            'price': '$56',
            'options': [
                'Vexillologist pitchfork',
                'Tumeric plaid portland',
                'Hexagon neutra unicorn',
                'Vexillologist pitchfork',
                'Mixtape chillwave tumeric',
            ],
            'is_popular': false,
        },
        {
            'id': 4,
            'title': 'SPECIAL',
            'price': '$72',
            'options': [
                'Vexillologist pitchfork',
                'Tumeric plaid portland',
                'Hexagon neutra unicorn',
                'Vexillologist pitchfork',
                'Mixtape chillwave tumeric',
            ],
            'is_popular': false,
        }
    ],
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
            'image_path': 'https://reqres.in/img/faces/5-image.jpg',
            'description': 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
            'name': 'ALPER KAMU',
            'job': 'UI Developer',
        },
        {
            'id': 3,
            'image_path': 'https://reqres.in/img/faces/3-image.jpg',
            'description': 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
            'name': 'HENRY LETHAM',
            'job': 'CTO',
        },
    ],
    'blogs': [
        {
            'id': 1,
            'month': 'Mar',
            'day': 12,
            'category': 'CATEGORY',
            'title': 'Blog Title Here',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'image_path': 'https://reqres.in/img/faces/5-image.jpg',
            'name': 'John Smith',
            'job': 'DEVELOPER',
        },
        {
            'id': 2,
            'month': 'Mar',
            'day': 12,
            'category': 'CATEGORY',
            'title': 'Blog Title Here',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'image_path': 'https://reqres.in/img/faces/5-image.jpg',
            'name': 'John Smith',
            'job': 'DEVELOPER',
        },
        {
            'id': 3,
            'month': 'Mar',
            'day': 12,
            'category': 'CATEGORY',
            'title': 'Blog Title Here',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'image_path': 'https://reqres.in/img/faces/6-image.jpg',
            'name': 'John Smith',
            'job': 'DEVELOPER',
        },
    ]
}

function HostingReducer(state=INIT_HOSTING_DATA, action) {
    return state
}

export default HostingReducer