const fetch = require('node-fetch')

const url = 'http://localhost:3000/api/weight'

class Sportsman {
    static showWeight = async () => {
        try {
            const res = await fetch(`${url}/show`);

            let data = await res.json();
            return data
        } catch (err) {

            console.error(err);
        }
    }
    static changeWeight = async () => {

    }
}

export { Sportsman }