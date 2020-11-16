export default async (req, res) => {
    const {
      query: { search },
    } = req

    res.statusCode = 200
    res.json({ name: search })
  }
  