import getUpcomingEvents from '../lib/getUpcomingEvents'

export default async (req, res) => {
    const events = await getUpcomingEvents('1000', '0');
    //TILL PAGINATION IS NOT IMPLEMENTED
    //GONNA KEEP IT LIKE THAT
  
    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: events })
  }
  