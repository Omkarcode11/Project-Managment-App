import { ChecklistItem, Priority, Stage, Task } from "@/types/Task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: Task = {
  title: "",
  assignee: "",
  checkList: [{ id: "" + Math.random() * 200, status: false, task: "" }],
  id: "" + Math.random() * 400,
  priority: Priority.LOW,
  status: Stage.TO_DO,
  dueDate: null,
};

let taskSlice = createSlice({
  initialState: initialState,
  name: "Task",
  reducers: {
    resetTask: (state) => {
      state.title = "";
      state.assignee = "";
      state.checkList = [
        { id: "" + Math.random() * 200, status: false, task: "" },
      ];
      state.id = "" + Math.random() * 400;
      state.priority = Priority.LOW;
      state.status = Stage.TO_DO;
      state.dueDate = null;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setAssignee: (state, action: PayloadAction<string>) => {
      state.assignee = action.payload;
    },
    addCheckList: (state) => {
      let id = String(state.checkList.length + 1);
      state.checkList.push({ id: id, status: false, task: "" });
    },
    updateTodoStatus: (
      state,
      action: PayloadAction<{ id: string; status: boolean }>
    ) => {
      let index = state.checkList.findIndex(
        (task) => task.id == action.payload.id
      );

      state.checkList[index].status = action.payload.status;
    },
    updateTodoTask: (
      state,
      action: PayloadAction<{ id: string; task: string }>
    ) => {
      let index = state.checkList.findIndex(
        (task) => task.id == action.payload.id
      );

      state.checkList[index].task = action.payload.task;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.checkList = state.checkList.filter(
        (task) => task.id !== action.payload
      );
    },
    setPriority: (state, action: PayloadAction<Priority>) => {
      state.priority = action.payload;
    },

    setDueDate: (state, action: PayloadAction<string>) => {
      state.dueDate = action.payload;
    },
    clearTask: (state) => {
      state = initialState;
    },
  },
});

export const {
  addCheckList,
  setPriority,
  deleteTodo,
  setAssignee,
  setDueDate,
  setTitle,
  updateTodoStatus,
  updateTodoTask,
  resetTask,
  clearTask,
} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
