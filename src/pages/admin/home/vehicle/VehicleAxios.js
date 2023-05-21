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

const postVehicle = () => {
    const newVehicle = JSON.stringify({
        brandId: "e4fb8f3f-0963-4d00-900c-80b4e6629694",
        model: "Innova Zenix AT",
        productionYear: 2023,
        color: "Hitam",
        isAutomatic: true,
        stock: 10,
        salePrice: 435000000,
        status: "baru"
    })
    const formData = new FormData();
    formData.append('vehicle', newVehicle);
    client.post('/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(res => console.log(res))
        .catch(err => {
            console.log('Error :', err);
        })
}

export {
    getVehicles,
    postVehicle
} 