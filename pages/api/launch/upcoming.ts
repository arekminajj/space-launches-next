import getUpcomingLaunches from '../lib/getUpcomingLaunches'

export default async (req, res) => {
    const launches = await getUpcomingLaunches('500', '0');
    //TILL PAGINATION IS NOT IMPLEMENTED
    //GONNA KEEP THAT LIMIT
    //TDOD: ADD PAGINATION

    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: launches })
  }
  