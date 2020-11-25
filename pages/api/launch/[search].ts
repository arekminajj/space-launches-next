import getLaunchesBySearch from '../lib/getLaunchesBySearch'

export default async (req, res) => {
    const {
      query: { search },
    } = req

    const launches = await getLaunchesBySearch('100', '0', search);

    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: launches
     })
  }
  