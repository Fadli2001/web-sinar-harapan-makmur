import axios from "axios"

const client = axios.create({
    baseURL: '/login'
})

const getToken = ({username,password}) => {
    client.post('/',{
        username : username,
        password : password
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log('Error :', err);
        
    })
}

const getTokenPromise = ({ username, password }) => {
    return new Promise((resolve, reject) => {
      client
        .post('/', {
          username: username,
          password: password
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

export {
    getToken,
    getTokenPromise
}