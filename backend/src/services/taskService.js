import Task from "../models/Task.js";

export const createTaskService = async (taskData) => {
  return await Task.create(taskData);
};

export const getTasksService = async (filter, skip, limit) => {
  return await Task.find(filter)
    .populate("createdBy", "name email")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
};

export const getTaskByIdService = async (taskId) => {
  return await Task.findById(taskId);
};

export const updateTaskService = async (taskId, updateData) => {
  return await Task.findByIdAndUpdate(taskId, updateData, {
    new: true,
    runValidators: true,
  });
};

export const deleteTaskService = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};
