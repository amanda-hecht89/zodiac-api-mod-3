const { Router } = require('express');
const { zodiacs } = require('../../data/Zodiacs');
const router = Router();

router.get('/:id', (req, res) => {
  const zodiac = zodiacs.find((zodiac) => zodiac.id === req.params.id);
  res.json(zodiac);
});

module.exports = router;
