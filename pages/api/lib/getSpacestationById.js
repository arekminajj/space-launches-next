async function getSpacestationById(id) {
    BASE_URL = 'https://ll.thespacedevs.com/2.0.0';

    const result = await fetch(BASE_URL + '/spacestation/' + id, 
        { method: 'GET' });
    const data = await result.json();
    
    return data;
}

export default getAllSpacestations;
