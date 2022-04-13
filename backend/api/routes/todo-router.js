import express from 'express';
import * as todoController from '../controllers/todo-controller.js';

// Defining the Routes for CRUD ops

const router = express.Router();

router.route('/todos')
    .post(todoController.post)
    .get(todoController.index);

router.route('/todos/:id')
    .get(todoController.get)
    .delete(todoController.remove)
    .put(todoController.update);

export default router;



