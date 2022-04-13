import * as todoServices from '../services/todo-service.js';

// Controller for BackEnd Ops

const setSuccessResponse = (obj, res) => {
    res.status(200).json(obj);
}

const setErrorResponse = (error, res) => {
    res.status(500).json('Error : ' + error);
}

export const post = async (req, res) => {
    try {

        const payload = req.body;
        const todo = await todoServices.save(payload);
        setSuccessResponse(todo, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const index = async (req, res) => {
    try {
        const title = req.query.title;
        const description = req.query.description;
        const query = {};

        if (title) {
            query.title = title;
        }
        if (description) {
            query.description = description;
        }

        const notes = await todoServices.search(query);
        setSuccessResponse(notes, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await todoServices.get(id);
        setSuccessResponse(todo, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updated = { ...req.body };
        updated.id = id;
        const todo = await todoServices.update(updated);
        setSuccessResponse(todo, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await todoServices.remove(id);
        setSuccessResponse({ message: `Successfully removed ${id}.` }, res);
    } catch (error) {
        setErrorResponse(error, res);
    }


}