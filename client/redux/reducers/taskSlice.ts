import { ChecklistItem, Priority, Stage, Task } from "@/types/Task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: Task = {
  title: "",
  assignee: "",
  checkList: [{ id: "sdf", status: false, task: "" }],
  id: "oij",
  priority: Priority.LOW,
  stage: Stage.TO_DO,
  date: "2024-05-05",
};

let taskSlice = createSlice({
  initialState: initialState,
  name: "Task",
  reducers: {
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
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: boolean }>
    ) => {
      let index = state.checkList.findIndex(
        (task) => task.id == action.payload.id
      );

      state.checkList[index].status = action.payload.status;
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; task: string }>
    ) => {
      let index = state.checkList.findIndex(
        (task) => task.id == action.payload.id
      );

      state.checkList[index].task = action.payload.task;
    },
    deleteCheckList: (state, action: PayloadAction<string>) => {
      state.checkList = state.checkList.filter(
        (task) => task.id != action.payload
      );
    },
    setPriority: (state, action: PayloadAction<Priority>) => {
      state.priority = action.payload;
    },

    setDueDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    clearTask: (state) => {
      state = initialState;
    },
  },
});

export const {
  addCheckList,
  setPriority,
  deleteCheckList,
  setAssignee,
  setDueDate,
  setTitle,
  updateStatus,
  updateTask,
  clearTask,
} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
