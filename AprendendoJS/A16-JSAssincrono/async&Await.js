//Utilizando async e await para trabalhar com promessa.

async function fecthPromise() {
    try {
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }

    }

    catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

fecthPromise()