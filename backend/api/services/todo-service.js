import Todo from '../models/todo.js';

export const save = (newTodo) => {
    const todo = new Todo(newTodo);
    return todo.save();
}

export const search = (query) => {

    const params = { ...query };
    return Todo.find(params).exec();

}

export const get = (id) => {
    const todo = Todo.findById(id).exec();
    return todo;
}

export const update = (updatedTodo) => {

    updatedTodo.modifiedDate = new Date();
    const todo = Todo.findByIdAndUpdate(updatedTodo.id, updatedTodo, { new: true }).exec();
    return todo;
}

export const remove = (id) => {
    const todo = Todo.findByIdAndDelete(id).exec();
    return todo;
}