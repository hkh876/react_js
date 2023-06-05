import { Container as MapDiv, NavermapsProvider } from "react-naver-maps";
import RestaurantMap from "./RestaurantMap";

function MyNaverMaps() {
    return (
        <NavermapsProvider 
            //ncpClientId=""
            submodules={["geocoder"]}>
            <MapDiv style={{
                position: 'relative',
                width: '100%',
                height: '100vh'  
            }}>
                <RestaurantMap />
            </MapDiv>
        </NavermapsProvider>
    );
}

export default MyNaverMaps;