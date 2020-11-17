import getAgencyById from '../lib/getAgnecyById';

export default async (req, res) => {
    const {
      query: { id },
    } = req

    const agency = await getAgencyById(id);
    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: agency })
  }
  