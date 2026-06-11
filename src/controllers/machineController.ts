import { Request, Response } from "express";
import Machine from "../models/Machine";

export const getMachines = async (req: Request, res: Response) => {
    const data = await Machine.find();
    res.json(data);
};

export const getMachineById = async (req: Request, res: Response) => {
    const data = await Machine.findById(req.params.id);
    res.json(data);
};

export const createMachine = async (req: Request, res: Response) => {
    const data = await Machine.create(req.body);
    res.status(201).json(data);
};

export const updateMachine = async (req: Request, res: Response) => {
    const data = await Machine.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(data);
};

export const deleteMachine = async (req: Request, res: Response) => {
    await Machine.findByIdAndDelete(req.params.id);
    res.json({ message: "Machine deleted successfully" });
};