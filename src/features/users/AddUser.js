import React from 'react'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from './UserSlice'
import {v4 as uuidv4} from 'uuid'

const AddUser = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAddUser = () => {
        console.log(values);
        setValues({ name: '' , email: '' })
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email,    
        }))
        navigate('/')
    }
    
    const [values, setValues] = useState({
        name: '',
        email: ''
    })
    return (
        <div className='mt-10 max-w-xl mx-auto'>
            <TextField
                label="Name"
                values={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: "text", placeholder: "Jhon Doe" }}
            />
            <br />
            <TextField
                label="Email"
                values={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                inputProps={{ type: "email", placeholder: "jhondoe@mail.com" }}
            />
            <Button onClick={handleAddUser}>Submit</Button>
        </div>
    )
}

export default AddUser