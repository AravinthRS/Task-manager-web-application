import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

const userSlice = createSlice({
  name: "user",
  initialState: {
    usersList: [...data],
  },
  reducers: {
    addTask(state, action) {
      const oldList = [...state.usersList];
      const newTask = action.payload.task;
      const id = action.payload.id;
      const index = oldList.findIndex((user) => user.id == Number(id));
      const oldTasks = oldList[index].tasks;
      oldList[index].tasks = [...oldTasks, newTask];
      state.usersList = oldList;
    },
    editTask(state, action) {
      const newTask = action.payload.task;
      const id = Number(action.payload.id);
      const taskIndex = Number(action.payload.index);
      const index = state.usersList.findIndex((user) => user.id == id);
      const oldTasks = state.usersList[index].tasks;
      oldTasks[taskIndex] = newTask;
    },
    deleteTask(state, action) {
      const taskIndex = action.payload.index;
      const id = action.payload.id;
      const oldList = [...state.usersList];
      const userIndex = oldList.findIndex((user) => user.id == Number(id));
      const oldTasks = oldList[userIndex].tasks;
      oldTasks.splice(taskIndex, 1);
      state.usersList = oldList;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice;
