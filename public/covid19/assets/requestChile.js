
const requestChile = async (pais) => {
    try {
        let response = await fetch(`http://localhost:3000/api/countries/${pais}`);
        if (response.ok && response.status == 200) {
            let data = await response.json();
            // console.log(data);
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




export default requestChile;