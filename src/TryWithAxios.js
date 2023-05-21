import axios from "axios"
import { useEffect, useState } from "react";

const requestData = (setState) => {
    // Pengunaan Dasar Axios 
    axios.get('vehicles',{
        params : {
            limit : 5,
            order : 'model',
            sort : 'ASC'
        }
    })
        .then(res => {
            console.log(res.data)
            setState(res)
        })
        .catch(err => {
            console.log('Error :', err);
        })
    // Konsep Dasar : 
    // Axios menggunakan metode HTTP seperti get, post, put, dan delete untuk berinteraksi 
    // dengan API. Anda dapat menggunakan metode yang sesuai dengan kebutuhan Anda.
    // Anda dapat menentukan konfigurasi tambahan seperti header, parameter, dan pengaturan waktu 
    // menggunakan objek konfigurasi kedua yang dapat Anda lewatkan ke metode Axios. Contoh:

    //     axios.get('http://159.65.140.190/vehicles', {
    //   headers: {
    //     'Authorization': 'Bearer your_token'
    //   },
    //   params: {
    //     page: 1,
    //     limit: 10
    //   }
    // })

}



const App = () => {
    const [vehicle, setVehicles] = useState({
        model : ''
    })

    useEffect(()=>{
        requestData(setVehicles)
    },[])
    
    return (
        <>  
            <h1>Test</h1>
            <h1>{vehicle.model}</h1>
        </>
    )
}

export default App