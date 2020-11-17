import getAllSpacestations from '../lib/getAllSpacestations'

export default async (req, res) => {
    const spacestations = await getAllSpacestations();

    res.statusCode = 200
    res.json({ 
      status: 'success',
      data: spacestations })
  }
  