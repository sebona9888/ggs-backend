import { Router } from "express";
import {
    getMachines,
    getMachineById,
    createMachine,
    updateMachine,
    deleteMachine,
} from "../controllers/machineController";

const router = Router();


// 📌 GET all machines
router.get("/", getMachines);

// 📌 GET single machine
router.get("/:id", getMachineById);

// 📌 CREATE machine
router.post("/", createMachine);

// 📌 UPDATE machine
router.put("/:id", updateMachine);

// 📌 DELETE machine
router.delete("/:id", deleteMachine);


export default router;