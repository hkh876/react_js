import { useState } from "react";
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

function EditCar(props) {
    const [open, setOpen] = useState(false)
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        year: '',
        price: ''
    })
    const handleClickOpen = () => {
        setCar({
            brand: props.data.row.brand,
            model: props.data.row.model,
            color: props.data.row.color,
            year: props.data.row.year,
            price: props.data.row.price,
        })
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleChange = (event) => {
        setCar({
            ...car,
            [event.target.name]: event.target.value
        })
    }
    const handleSave = () => {
        props.updateCar(car, props.data.id)
        handleClose()
    }

    return (
        <div>
            <button onClick={handleClickOpen}>Edit</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Car</DialogTitle>
                <DialogContent>
                    <input placeholder="Brand" name="brand" value={car.brand} onChange={handleChange}/>
                    <input placeholder="Model" name="model" value={car.model} onChange={handleChange}/>
                    <input placeholder="Color" name="color" value={car.color} onChange={handleChange}/>
                    <input placeholder="Year" name="year" value={car.year} onChange={handleChange}/>
                    <input placeholder="Price" name="price" value={car.price} onChange={handleChange}/>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditCar;