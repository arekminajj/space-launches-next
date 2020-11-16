import getPreviousLaunches from '../lib/getPreviousLaunches'

export default async (req, res) => {
    const launches = await getPreviousLaunches('3000', '0');
    //TILL PAGINATION IS NOT IMPLEMENTED
    //GONNA KEEP THAT LIMIT
    //TDOD: ADD PAGINATION

    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: launches })
  }
  