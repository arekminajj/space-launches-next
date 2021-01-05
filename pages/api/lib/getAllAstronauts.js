async function getAllAstronauts(limit, offset, search) {
    const BASE_URL = process.env.API_URL;
    //SOMETHING IS NOT RIGHT HERE, BUT WORKS SO GONNA KEEP IT TILL FIX ASTRONAUT PAGE.
    let url;
    if(search) {
        url = BASE_URL + '/astronaut?limit=' + limit + '&offset=' + offset + '&search=' + search;
    }
    else {
        url = BASE_URL + '/astronaut?limit=' + limit + '&offset=' + offset;
    }

    const result = await fetch(url, 
        { method: 'GET' });
    const data = await result.json();
    
    return data;
}

export default getAllAstronauts;
