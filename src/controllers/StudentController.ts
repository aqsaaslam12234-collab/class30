import { Request, Response } from "express";
import Student from "../models/StudentModel";

class StudentController {
  async getAllStudents(req: Request, res: Response) {
    const students = await Student.find();
    res.json(students);
  }
  async createStudent(req: Request, res: Response) {
    const { name, age, marks, address } = req.body;
    const newStudent = new Student({ name, age, marks, address });
    await newStudent.save();
    res.status(201).json(newStudent);
  }
}
export default StudentController;
