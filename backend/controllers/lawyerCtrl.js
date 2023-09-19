const lawyerCtrl = {
  getNotes: async (req, res) => {
    try {
      const notes = await Notes.find({ user_id: req.user.id })
      res.json(notes)
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
}

module.exports = lawyerCtrl
