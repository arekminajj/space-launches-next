async function getAgencyById(id) {
    const BASE_URL = 'https://ll.thespacedevs.com/2.0.0';

    const result = await fetch(BASE_URL + '/agencies/' + id, 
        { method: 'GET' });
    const data = await result.json();
    
    return data;
}

export default getAgencyById;
