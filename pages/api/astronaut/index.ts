import getAllAstronauts from '../lib/getAllAstronauts';

export default async (req, res) => {
  const {
    query: { limit, offset, search },
  } = req

    const astronauts = await getAllAstronauts(limit, offset, search);

    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: astronauts })
  }
  