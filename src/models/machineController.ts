import { Request, Response } from "express";
import Machine from "../models/Machine";


// 📌 GET all machines
export const getMachines = async (req: Request, res: Response) => {
    try {
        const data = await Machine.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching machines" });
    }
};


// 📌 GET single machine
export const getMachineById = async (req: Request, res: Response) => {
    try {
        const data = await Machine.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching machine" });
    }
};


// 📌 CREATE machine
export const createMachine = async (req: Request, res: Response) => {
    try {
        const data = await Machine.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error creating machine" });
    }
};


// 📌 UPDATE machine
export const updateMachine = async (req: Request, res: Response) => {
    try {
        const data = await Machine.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error updating machine" });
    }
};


// 📌 DELETE machine
export const deleteMachine = async (req: Request, res: Response) => {
    try {
        await Machine.findByIdAndDelete(req.params.id);
        res.json({ message: "Machine deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting machine" });
    }
};