const fetch = require('node-fetch')

const url = 'http://localhost:3000/api'

class User {
    static login = async (body) => {
        try {
            const res = await fetch(`${url}/login`, {
                method: 'post',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            });

            let data = await res.json();
           console.log(data)
        } catch (err) {

            console.error(err);
        }
    }

    static signup = async (body) => {
        try {
            const res = await fetch(`${url}/signup`, {
                method: 'post',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            });

            let data = await res.json();
            return data
        } catch (err) {

            console.error(err);
        }
    }

}

export { User }