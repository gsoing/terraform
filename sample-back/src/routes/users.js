const express = require('express');
const router = express.Router();
const userService = require('../services/users.js');


router.route('/')
    .get(async (_req, res) => {
        res.json(await userService.getUsers())
    })
    .post(async (req, res) => {
        res.status(201).json(await userService.createUser(req.body));
});

router.route('/:id')
    .get(async (req, res) => {
        res.status(200).json(await userService.getUser(req.params.id));
    });

router.route('/:id/answers')
    .post(async (req, res) => {
        res.status(200).json(await userService.updateAnswers(req.params.id, req.body));
    });

module.exports = router;
