async function getUpcomingLaunches(limit, offset) {
    BASE_URL = 'https://ll.thespacedevs.com/2.0.0';

    const result = await fetch(BASE_URL + '/launch/upcoming?limit=' + limit + '&offset=' + offset, 
        { method: 'GET' });
    const data = await result.json();
        
    return data;
}

export default getUpcomingLaunches;