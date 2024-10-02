const express = require('express');  // To get acess to express Route();
const tourController = require('./../controllers/taskControllers.js');

const router = express.Route();

router('/')
    .get(),
    .post(),
    .delete();

router('/:id')
    .get()
    .patch()
    .delete();