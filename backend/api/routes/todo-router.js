import express from 'express';
import * as todoController from '../controllers/todo-controller.js';

const router = express.Router();

router.route('/todo')
    .post(todoController.post)
    .get(todoController.index);

router.route('/todo/:id')
    .get(todoController.get)
    .delete(todoController.remove)
    .put(todoController.update);

export default router;



