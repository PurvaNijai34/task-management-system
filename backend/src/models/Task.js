import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    description: {
      type: String,
      required: [true, "Task description is required"],
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);




taskSchema.index({
  createdBy: 1,
});

taskSchema.index({
  status: 1,
});
const Task = mongoose.model("Task", taskSchema);

export default Task;