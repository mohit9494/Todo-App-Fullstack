import todoRouter from './todo-router.js';

const mainApp = (app) => {
    app.use('/', todoRouter);
}

export default mainApp;