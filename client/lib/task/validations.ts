import { ChecklistItem, Task } from "@/types/Task";

export const todoValidation = (todo: ChecklistItem) => {
  if (!todo.task || !todo.task.trim().length || todo.status === null) {
    return {
      valid: false,
      error: "Title, task, and status are required.",
    };
  }
  return { valid: true, error: "" };
};

export const checkListValidation = (list: ChecklistItem[]) => {
  if (list.length === 0) {
    return {
      valid: false,
      error: "Check list must have at least one item.",
    };
  }

  for (let listItem of list) {
    if (!todoValidation(listItem).valid) {
      return {
        valid: false,
        error: "Check list contains invalid item.",
      };
    }
  }
};
