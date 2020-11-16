export default (req, res) => {
    const {
      query: { id },
    } = req

    res.statusCode = 200
    res.json({ name: 'John Doe' })
  }
  