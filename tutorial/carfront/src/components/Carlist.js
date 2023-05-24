import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../constants";
import { DataGrid } from "@mui/x-data-grid";
import Snackbar from "@mui/material/Snackbar";
import AddCar from "./AddCar";
import EditCar from "./EditCar";
import CustomToolbar from "./CustomToolbar";

function Carlist() {
    const [cars, setCars] = useState([])
    const [open, setOpen] = useState(false)
    const columns = [
        {field: 'brand', headerName: 'Brand', width: 200},
        {field: 'model', headerName: 'Model', width: 200},
        {field: 'color', headerName: 'Color', width: 200},
        {field: 'year', headerName: 'Year', width: 150},
        {field: 'price', headerName: 'Price', width: 150},
        {
            field: '_links.car.href',
            headerName: '',
            sortable: false,
            filterable: false,
            renderCell: row =>
                <EditCar
                    data={row}
                    updateCar={updateCar}/>
        },
        {
            field: '_links.self.href',
            headerName: '',
            sortable: false,
            filterable: false,
            renderCell: row =>
                <button onClick={() => onDelClick(row.id)}>
                    Delete
                </button>
        }
    ]
    const getCars = () => {
        axios.get(SERVER_URL + '/api/cars')
        .then(response => response.data)
        .then(data => setCars(data._embedded.cars))
        .catch(error => console.error(error))
    }
    const onDelClick = (url) => {
        if (window.confirm("Are you sure to delete?")) {
            axios.delete(url)
            .then(response => {
                if (response.status === 200 || response.status === 204) {
                    getCars()
                    setOpen(true)
                } else {
                    alert('Something went wrong!')
                }
            })
            .catch(error => console.error(error))
        }
    }
    const addCar = (car) => {
        axios.post(
            SERVER_URL + '/api/cars',
            car,
        ).then(response => {
            if (response.status === 200 || response.status === 201) {
                getCars()
            } else {
                alert('Something went wrong!')
            }
        }).catch(error => console.error(error))
    }
    const updateCar = (car, link) => {
        axios.put(
            link,
            car
        ).then(response => {
            if (response.status === 200) {
                getCars()
            } else {
                alert('Something went wrong!')
            }
        }).catch(error => console.error(error))
    }

    useEffect(() => {
        getCars()
    }, [])

    return (
        <>
            <AddCar addCar={addCar}/>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid 
                    rows={cars} 
                    columns={columns}
                    disableRowSelectionOnClick={true}
                    getRowId={row => row._links.self.href}
                    components={{ Toolbar: CustomToolbar }}/>
                <Snackbar 
                    open={open}
                    autoHideDuration={2000}
                    onClose={() => setOpen(false)}
                    message="Car deleted"/>
            </div>
        </>
        
    )
}

export default Carlist;