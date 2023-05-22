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
    const formData = new FormData();

    const newVehicle = JSON.stringify({
        brandId: "e4fb8f3f-0963-4d00-900c-80b4e6629694",
        model: "Mercedes-Benz",
        productionYear: 2022,
        color: "Putih",
        isAutomatic: true,
        stock: 13,
        salePrice: 540000000,
        status: "baru"
    })
    formData.append('vehicle', newVehicle);

    const file = new File(['file content'], 'example.txt');
    formData.append('file', file);

    const token = sessionStorage.getItem('token');
    console.log(token);
    client.post('/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            // 'a' : '123'
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