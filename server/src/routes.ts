
import express from 'express'
import ClassesController from './controller/ClassesController';
import ConnectionsController from './controller/ConnectionsController';


const routes = express.Router();

const classesControllers = new ClassesController;
const connectionsController= new ConnectionsController

routes.get('/classes', classesControllers.index );

routes.post('/classes', classesControllers.create );

routes.post('/connections', connectionsController.create);

routes.get('/connections', connectionsController.index);
export default routes