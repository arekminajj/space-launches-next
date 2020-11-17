import getAllAstronauts from '../lib/getAllAstronauts';

export default async (req, res) => {
    const astronauts = await getAllAstronauts('99999', '0');
    //TILL PAGINATION IS NOT IMPLEMENTED
    //GONNA KEEP IT LIKE THAT

    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: astronauts })
  }
  