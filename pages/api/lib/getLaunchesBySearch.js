async function getLaunchesBySearch(limit, offset, search) {
    const BASE_URL = 'https://ll.thespacedevs.com/2.0.0';

    const result = await fetch(BASE_URL
        + '/launch?limit=' + limit
        + '&offset=' + offset
        + '&search=' + search, 
        { method: 'GET' });

    const data = await result.json();
    
    return data;
}

export default getLaunchesBySearch;
