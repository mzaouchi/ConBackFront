import { GETALLCONTACTS, GETONECONTACT } from "./ActionTypes"
import axios from 'axios'

export const getAllContacts=()=>async(dispatch)=>{
    try {
        const res = await axios.get("/api/contact/getContacts")

        dispatch(
            {
                type : GETALLCONTACTS,
                payload : res.data.contacts
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const addContact=(newContact,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/contact/addContact',newContact)

        dispatch(getAllContacts())

        navigate('/ListContacts')
    } catch (error) {
        console.log(error)
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/contact/getContact/${id}`)
        
        dispatch(
            {
                type : GETONECONTACT,
                payload : res.data.oneContact
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const updateContact=(id,newCordContact,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/updateContact/${id}`,newCordContact)

        dispatch(getAllContacts())

        navigate('/ListContacts')
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contact/deleteContact/${id}`)

        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}