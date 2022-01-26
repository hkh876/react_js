const INIT_PLANET_DATA = {
    'planet_data': {},
    'current_page': sessionStorage.getItem('page') === null ? 'earth' : sessionStorage.getItem('page'),
}

function PlanetReducer(state=INIT_PLANET_DATA, action) {
    if(action.type === 'update_data') {
        state['planet_data'] = action.payload
    }
    else if(action.type === 'update_page') {
        state['current_page'] = action.payload
        state['planet_data'][action.payload]['info_type'] = 'overview'
    }

    // session storage
    sessionStorage.setItem('page', state.current_page)

    return { ...state }
}

export default PlanetReducer