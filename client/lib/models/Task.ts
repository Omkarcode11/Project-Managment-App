import { Priority, Stage } from "@/types/Task";
import { Schema, Types, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [Stage.BACKLOG, Stage.DONE, Stage.IN_PROGRESS, Stage.TO_DO],
      default: Stage.TO_DO,
    },
    assignee: {
      type: Types.ObjectId,
      ref: "User",
    },
    priority: {
      type: String,
      enum: [Priority.HIGH, Priority.MEDIUM, Priority.LOW],
      default: Priority.LOW,
    },
    checklist: {
      type: [Types.ObjectId],
      ref: "Todo",
      default: [],
    },
    dueDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true, versionKey: false }
);

const Task = models.Task || model("Task", taskSchema);

export default Task;
