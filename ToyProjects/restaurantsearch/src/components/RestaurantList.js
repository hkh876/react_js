import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton"
import MapIcon from "@mui/icons-material/Map"
import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../constants";
import SearchBar from "./SearchBar";

function RestaurantList(props) {
    const [restaurants, setRestaurants] = useState([]);
    const columns = [
        { field: 'storeName', headerName: '상호명', flex: 2 },
        { field: 'streetAddress', headerName: '도로명주소', flex: 3 },
        { 
            field: 'businessStatus', 
            headerName: '영업상태', 
            valueGetter: (params) => {
                if (params.value === 1) {
                    return "영업중";
                } else {
                    return "폐업";
                }
            },
            cellClassName: (params) => {
                if (params.row.businessStatus === 2) {
                    return "color-gray";
                } else {
                    return "color-green";
                }
            },
            flex: 1,
        },
        {
            field: 'map',
            headerName: '',
            sortable: false,
            filterable: false,
            renderCell: (row) =>
                <IconButton onClick={(e) => onMapClick(e, row.row.streetAddress)}>
                    <MapIcon></MapIcon>
                </IconButton>
        }
    ];
    
    // Events
    const onRowClick = (params) => {
        console.log(params);
    };
    const onSearchClick = (event, searchTerm) => {
        axios.get(
            SERVER_URL + '/restaurants?search=' + searchTerm
        ).then(response => {
            setRestaurants(response.data);
        }).catch(error => console.error(error));
    };
    const onMapClick = (event, streetAddress) => {
        window.open(
            'https://map.naver.com/v5/search/' + streetAddress,
            '_blank'
        );
        /*
        props.navigateHook(
            '/maps',
            {
                state: {
                    streetAddress: streetAddress
                }
            }
        );
        */
    };

    useEffect(() => {
        axios.get(
            SERVER_URL + "/restaurants"
        ).then(response => {
            setRestaurants(response.data);
        }).catch(error => console.error(error));
    }, []);

    return (
        <>
            <SearchBar onSearchClick={onSearchClick}/>
            <DataGrid 
                sx={{ mt: 2 }}
                rows={restaurants}
                columns={columns}
                disableRowSelectionOnClick={true}
                onRowClick={onRowClick}
                />
        </>
    );
}

export default RestaurantList;