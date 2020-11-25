async function getLaunchById(id) {
    const BASE_URL = 'https://ll.thespacedevs.com/2.0.0';

    const result = await fetch(BASE_URL + '/launch/' + id, 
        { method: 'GET' });
    const data = await result.json();
    
    return data;
}

export default getLaunchById;
