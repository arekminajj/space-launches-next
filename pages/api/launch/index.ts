import getAllLaunches from '../lib/getAllLaunches'

export default async (req, res) => {
    const launches = await getAllLaunches('3000', '0');
    //TILL PAGINATION IS NOT IMPLEMENTED
    //GONNA KEEP THAT LIMIT
    //TDOD: ADD PAGINATION

    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: launches })
  }
  