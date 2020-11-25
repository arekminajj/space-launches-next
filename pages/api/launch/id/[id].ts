import getLaunchById from '../../lib/getLaunchById';

export default async (req, res) => {
    const {
      query: { id },
    } = req

    const launch = await getLaunchById(id);

    console.log("hello from [id].ts")
    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: launch
     })
  }
  