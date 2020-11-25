async function getAllAstronauts(limit, offset) {
    const BASE_URL = process.env.API_URL;

    const result = await fetch(BASE_URL + '/astronaut?limit=' + limit + '&offset=' + offset, 
        { method: 'GET' });
    const data = await result.json();
    
    return data;
}

export default getAllAstronauts;
