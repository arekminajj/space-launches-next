async function getPreviousLaunches(limit, offset) {
    const BASE_URL = process.env.API_URL;

    const result = await fetch(BASE_URL + '/launch/previous?limit=' + limit + '&offset=' + offset, 
        { method: 'GET' });
    const data = await result.json();
    
    return data;
}

export default getPreviousLaunches;
