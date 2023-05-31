// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectController from './profile.controller';

// Creando la instancia del enrutador
const router = new Router();

/* Enrutamos
GET '/project
*/
router.get('/showProfile', projectController.showProfile);

/* Enrutamos
GET '/projects/add'
*/
router.get('/filesProfile', projectController.filesProfile);

// Exportando tramo de ruta
export default router;
