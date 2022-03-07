import { combineReducers } from "redux"
import EducationReducer from "./EducationReducer"
import GarageReducer from "./GarageReducer"
import HostingReducer from "./HostingReducer"
import ShopReducer from "./ShopReducer"

const INIT_BLOCK_DATA = {
    'burger_is_active': false,
    'main_color': 'primary',
    'title': 'BULMA PREVIEWS',
    'pages': [
        {
            'id': 1,
            'title': 'Bulma Hosting',
            'description': '"Bulma Hosting" is a First Example showing that how to use Bulma Blocks? & What Bulma Blocks can build? by doing only just copy and paste.',
            'icon_class': 'fab fa-ioxhost',
            'color': 'primary',
            'link_to': '/example-1',
        },
        {
            'id': 2,
            'title': 'Bulma Garage',
            'description': '"Bulma Garage" is a Second Example showing that how to use Bulma Blocks? & What Bulma Blocks can build? by doing only just copy and paste.',
            'icon_class': 'fas fa-warehouse',
            'color': 'danger',
            'link_to': '/example-2',
        },
        {
            'id': 3,
            'title': 'Bulma Education',
            'description': '"Bulma Education" is a Third Example showing that how to use Bulma Blocks? & What Bulma Blocks can build? by doing only just copy and paste.',
            'icon_class': 'fas fa-user-graduate',
            'color': 'link',
            'link_to': '/example-3',
        },
        {
            'id': 4,
            'title': 'Bulma Shop',
            'description': '"Bulma Shop" is a Fourth Example showing that how to use Bulma Blocks? & What Bulma Blocks can build? by doing only just copy and paste.',
            'icon_class': 'fas fa-shopping-cart',
            'color': 'success',
            'link_to': '/example-4',
        }
    ],
}

function BlockReducer(state=INIT_BLOCK_DATA, action) {
    if(action.type === 'UPDATE_BURGER_IS_ACTIVE') {
        return { 
            ...state,
            burger_is_active: action.payload
        }
    }
    else if(action.type === 'UPDATE_PARAMS') {
        Object.keys(action.payload).forEach((key) => {
            state[key] = action.payload[key]
        })

        return { ...state }
    }
    else {
        return state
    }
}

const allReducers = combineReducers({
    common: BlockReducer,
    hosting: HostingReducer,
    garage: GarageReducer,
    education: EducationReducer,
    shop: ShopReducer,
})

export default allReducers