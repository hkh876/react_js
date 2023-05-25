import { useState } from "react";
import axios from 'axios'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import { SERVER_URL } from "../constants";
import Carlist from "./Carlist";
import { useEffect } from "react";

function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const [isAuthenticated, setAuth] = useState(false)
    const [open, setOpen] = useState(false)
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    const login = () => {
        axios.post(
            SERVER_URL + '/login',
            user
        ).then(response => {
            const jwtToken = response.headers.get('Authorization')
            if (jwtToken !== null) {
                sessionStorage.setItem('jwt', jwtToken)
                setAuth(true)
            } 
        }).catch(error => {
            console.error(error)
            setOpen(true)
        })
    }
    const logout = () => {
        sessionStorage.removeItem('jwt')
        setAuth(false)
    }

    useEffect(() => {
        const jwtToken = sessionStorage.getItem('jwt')
        if (jwtToken !== null) {
            setAuth(true)
        }
    }, [])

    if (isAuthenticated) {
        return <Carlist onLogoutClick={logout}/>
    } else {
        return (
            <div>
                <Stack spacing={2} alignItems='center' mt={2}>
                    <TextField name="username" label="Username" onChange={handleChange}/>
                    <TextField type="password" name="password" label="Password" onChange={handleChange}/>
                    <Button variant="outlined" color="primary" onClick={login}>Login</Button>
                </Stack>
                <Snackbar 
                    open={open}
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
                    message="Login failed: Check your username and password"/>
            </div>
        )
    }
}

export default Login;