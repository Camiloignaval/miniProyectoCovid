const postData = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3000/api/login',
            {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password })
            })
        // console.log(response)

        const { token } = await response.json()
        if (token == undefined) {
            return false;
        }
        else if (token) {
            localStorage.setItem('jsToken', token)
            return token
        }
        else {
            throw new Error('No es posible conectarse con servidor')
        }


    } catch (err) {
        console.error(`Error`)
    }
}

const getData = async (jwt, link) => {
    try {
        const response = await fetch(link,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
        const { data } = await response.json()
        // console.log(data);
        return data
    } catch (err) {
        console.error(`Error: ${err}`)
    }
}

export { postData, getData };