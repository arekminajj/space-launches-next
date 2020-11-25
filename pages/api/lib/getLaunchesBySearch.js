async function getLaunchesBySearch(limit, offset, search) {
    const BASE_URL = process.env.API_URL;

    const result = await fetch(BASE_URL
        + '/launch?limit=' + limit
        + '&offset=' + offset
        + '&search=' + search, 
        { method: 'GET' });

    const data = await result.json();
    
    return data;
}

export default getLaunchesBySearch;
