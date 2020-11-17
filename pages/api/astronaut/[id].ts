import getAstronautById from '../lib/getAstronautById';

export default async (req, res) => {
    const {
      query: { id },
    } = req

    const astronaut = await getAstronautById(id);

    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: astronaut })
  }
  