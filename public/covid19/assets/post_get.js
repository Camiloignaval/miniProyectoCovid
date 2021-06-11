const postData = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3000/api/login',
            {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password })
            })
        const { token } = await response.json()
        if (token) {
            localStorage.setItem('jsToken', token)
        }

        // console.log(token);
        return token
    } catch (err) {
        console.error(`Error: ${err}`)
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