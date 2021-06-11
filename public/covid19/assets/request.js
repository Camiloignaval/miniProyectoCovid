
const request = async (addLink) => {
    try {
        let response = await fetch(`http://localhost:3000/api/${addLink}`);
        if (response.ok && response.status == 200) {
            let { data } = await response.json();
            return data;
        }

        else {
            throw new Error('Imposible comunicarse con servidor')
        }
    } catch (err) {
        console.log(err);
        return;
    }
}




export default request;