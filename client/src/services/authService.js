const fetch = require('node-fetch')

const url = 'http://localhost:3000/account'

class User {
    static login = async (body) => {
        try {
            const res = await fetch(`${url}/login`, {
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

    static signin = async () => {
        try {
            const res = await fetch(`${url}/signin`);

            let data = await res.json();
            return data
        } catch (err) {

            console.error(err);
        }
    }

}

export { User }