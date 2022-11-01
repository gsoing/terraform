const express = require('express');
const router = express.Router();
const answerService = require('../services/answers.js');


router.route('/')
    .post((req, res) => {
        const answer = answerService.test(req.body)
      if (answer) {
          res.status(200).send(answer);
      } else {
          res.status(412).send();
      }
});

module.exports = router;
