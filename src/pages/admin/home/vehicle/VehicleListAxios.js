import axios from "axios"
import { useEffect, useState } from "react";

const client = axios.create({
    baseURL: '/vehicles'
})

const getVehicles = (setState) => {
    client.get('/',)
        .then(res => {            
            setState(res.data.data)
        })
        .catch(err => {
            console.log('Error :', err);
        })
}

export {
    getVehicles
} 