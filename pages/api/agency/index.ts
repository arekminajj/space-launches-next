import getAllAgencies from '../lib/getAllAgencies';

export default async (req, res) => {
    const agencies = await getAllAgencies('99999', '0');
    //TILL PAGINATION IS NOT IMPLEMENTED
    //GONNA KEEP IT LIKE THAT

    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: agencies })
  }
  