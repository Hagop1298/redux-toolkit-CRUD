import React from 'react'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from './UserSlice'

const EditUser = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const users = useSelector(store => store.users)
    const navigate = useNavigate()
    const existingUser = users.filter(user => user.id === params.id)
    const { name, email } = existingUser[0]
    const [values, setValues] = useState({
        name,
        email
    })
    const handleEditUser = () => {
        console.log(values);
        setValues({ name: "", email: '' })
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }))
        navigate('/')
    }



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
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    )
}


export default EditUser