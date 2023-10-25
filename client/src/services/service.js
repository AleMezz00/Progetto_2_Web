const BASE_URL = 'http://localhost:9000',
    HEADERS ={"Content-Type": "application/json"};


export default{

    getElemento:(requestBody) => {
        return fetch('http://localhost:9000/inserisciElemento',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

    getLogin:(requestBody) => {
        return fetch('http://localhost:9000/loginAmministratore',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

    deleteElement: (requestBody) => {
        return fetch('http://localhost:9000/eliminaProdotto',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

    updateElement: (requestBody) => {
        return fetch('http://localhost:9000/aggiornaMenu',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

    insertOrder:(requestBody) => {
        return fetch('http://localhost:9000/ordine/inserisci',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

    

}

