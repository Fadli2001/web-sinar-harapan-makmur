import { useEffect } from "react";

const baseURL = 'https://jsonplaceholder.typicode.com/users'

const getUsers = (setState) => {
    useEffect(() => {
        fetch(baseURL)
            .then(response => response.json())
            // jika tidak maka akan mendapatkan objek Response langsung sebagai respons dari permintaan API. 
            // Objek Response memiliki berbagai properti dan metode yang terkait dengan respons HTTP, seperti 
            // status, header, dan metode text() atau json() untuk menguraikan data respons.

            // response.blob()
            // representasi biner dari data, seperti file atau data gambar, yang dapat diakses dan digunakan dalam JavaScript.
            //Metode response.blob() berguna ketika Anda perlu mengambil dan bekerja dengan data biner, seperti file media atau gambar. 
            // Anda dapat menggunakan objek Blob tersebut untuk melakukan berbagai operasi, seperti menampilkan atau menyimpannya.
            .then(data => {
                console.log(data);
                // Lakukan manipulasi atau tampilkan data sesuai kebutuhan Anda
                setState(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []); // Efek dijalankan sekali saat komponen pertama kali dirender
}

const getUsersAsync = (setState) => {
    async function fetchData() {
        try {
            const response = await fetch(baseURL);
            const data = await response.json();
            console.log(data);
            setState(data)
            // Lakukan manipulasi atau tampilkan data sesuai kebutuhan Anda
            setState(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    /**
        - Readibility Code 
        - try catch 
        - asyncron
        - Pembatalan yang lebih mudah: Dengan async/await, Anda dapat menggunakan struktur try/catch untuk menangani 
        pembatalan atau penolakan janji. Anda dapat menggunakan pernyataan throw untuk menghentikan atau menolak janji, 
        dan kemudian menangani penolakan tersebut dengan catch untuk melakukan tindakan yang sesuai.
    */
}

const createUser = (newUser) => {
    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser) // untuk mengonversi objek userData menjadi string JSON 
    })
        .then(response => response.json())
        .then(data => {
            console.log('New user created:', data);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}


const getUsersById = (id, setState) => {
    useEffect(() => {
        fetch(`${baseURL}/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setState(data)
                // Lakukan manipulasi atau tampilkan data sesuai kebutuhan Anda
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }, [])
}


export {
    getUsers,
    createUser,
    getUsersById,
    getUsersAsync
}