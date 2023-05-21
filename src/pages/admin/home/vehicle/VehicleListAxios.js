import axios from "axios"
import { useEffect, useState } from "react";

const getVehicles = () => {
    axios.get('vehicles',)
        .then(res => {
            console.log(res.data)
            // setState(res)
        })
        .catch(err => {
           console.log('Error :', err);
        })
}



const AppV = () => {
    // const [vehicle, setVehicles] = useState({})
    useEffect(()=>{
        getVehicles()
    },[])
    return (
        <>  
            <h1>Test</h1>
            {/* <h1>{vehicle.model}</h1> */}
        </>
    )
}

export default AppV