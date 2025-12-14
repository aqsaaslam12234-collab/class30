import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  marks: { type: Number, required: true },
  address: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
