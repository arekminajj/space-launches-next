async function getAgencyById(id) {
    const BASE_URL = process.env.API_URL;

    const result = await fetch(BASE_URL + '/agencies/' + id, 
        { method: 'GET' });
    const data = await result.json();
    
    return data;
}

export default getAgencyById;
