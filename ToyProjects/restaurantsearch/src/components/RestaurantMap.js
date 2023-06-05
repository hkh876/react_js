import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavermaps, NaverMap, Marker } from "react-naver-maps";
import { useLocation } from "react-router-dom";

function RestaurantMap() {
    const [geometric, setGeometric] = useState({
        latitude: 126.9783882, 
        longitude: 37.5666103,
    });
    const location = useLocation();
    const naverMaps = useNavermaps();
    
    /* CORS 오류
    const searchAddressToCoordinate = useCallback((address) => {
        naverMaps.Service.geocode(
            {
                query: address,
            },
            function (status, response) {
                if (status === naverMaps.Service.Status.ERROR) {
                    return alert('Something Wrong!');
                }

                if (response.v2.meta.totalCount === 0) {
                    return alert('totalCount' + response.v2.meta.totalCount);
                }

                const item = response.v2.address[0];
                setGeometric({latitude: item.x, longitude: item.y});
            }
        )
    }, [naverMaps.Service]);
    
    useEffect(() => {
        const streetAddress = location.state.streetAddress;
        searchAddressToCoordinate(streetAddress);
    }, [location.state.streetAddress, searchAddressToCoordinate]);
    */

    useEffect(() => {
        const streetAddress = location.state.streetAddress;
        axios.get(
            '/map-geocode/v2/geocode',
            {
                params: {
                    query: streetAddress,
                },
                headers: {
                    /* Your Naver API KEY
                    "X-NCP-APIGW-API-KEY-ID": "",
                    "X-NCP-APIGW-API-KEY": ""
                    */
                }
            }
        )
        .then(response => {
            setGeometric({
                latitude: response.data.addresses[0].y,
                longitude: response.data.addresses[0].x
            })
        })
        .catch(error => console.error(error));
    }, [location.state.streetAddress]);

    return (
        <NaverMap
            center={{lat: geometric.latitude, lng: geometric.longitude}}
            defaultZoom={17}>
            <Marker 
                position={naverMaps.LatLng(geometric.latitude, geometric.longitude)}
                animation={2}
                />
        </NaverMap>
    );
}



export default RestaurantMap;