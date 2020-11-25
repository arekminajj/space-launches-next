async function getAllSpacestations() {
    const BASE_URL = process.env.API_URL;

    const result = await fetch(BASE_URL + '/spacestation', 
        { method: 'GET' });
    const data = await result.json();
    
    return data;
}

export default getAllSpacestations;
