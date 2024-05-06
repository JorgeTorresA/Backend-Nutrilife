import express  from "express";
import { guardarPago, 
    obtenerHistorial,
eliminarPago,
obtenerfechavencimiento }
    from "../controllers/historialController.js";
import checkAuth from "../middleware/authMiddleware.js";


const router = express.Router();

// Ruta para guardar un nuevo pago
router.post('/almacenar', guardarPago);

// Ruta para obtener el historial de pagos de un cliente
router.get('/', obtenerHistorial);
router.get('/fechavencimiento', obtenerfechavencimiento)
router.delete('/:id', checkAuth, eliminarPago)

export default router;
