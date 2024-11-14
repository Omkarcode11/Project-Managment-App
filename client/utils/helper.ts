import {
  ChecklistItem,
  Priority,
  Stage,
  ValidateTaskReturnType,
} from "@/types/Task";

export function capitalize(str: string) {
  return str
    .split(" ")
    .map(
      (ele: string) =>
        ele.slice(0, 1).toLocaleUpperCase() + ele.slice(1).toLocaleLowerCase()
    )
    .join(" ");
}

export function getInitials(str: string) {
  return str
    .split(" ")
    .map((ele) => ele.slice(0, 1))
    .join("");
}

export function validateTask(task: any): ValidateTaskReturnType {
  const errors: ValidateTaskReturnType = { valid: false, error: "" };

  // Check if id is a non-empty string
  if (typeof task.id !== "string" || task.id.trim() === "") {
    errors.error = "Invalid Id";
    return errors;
  }

  // Check if title is a non-empty string
  if (typeof task.title !== "string" || task.title.trim() === "") {
    errors.error = "Invalid Title";
    return errors;
  }

  // Check if assignee is a non-empty string
  // if (typeof task.assignee !== "string" || task.assignee.trim() === "") {
  //   errors.error = "Invalid 'assignee'.";
  //   return errors;
  // }

  // Validate priority as a valid enum value
  if (!Object.values(Priority).includes(task.priority)) {
    errors.error = `Invalid Priority`;
    return errors;
  }

  // Validate stage as a valid enum value
  if (!Object.values(Stage).includes(task.stage)) {
    errors.error = `Invalid Stage.`;
    return errors;
  }

  // Validate checkList array
  if (!Array.isArray(task.checkList) || task.checkList.length==0) {
    errors.error = "Invalid CheckList";
    return errors;
  } else {
    // Check each checklist item
    // task.checkList.forEach((item: ChecklistItem, index: number) => {
    for (let index = 0; index < task.checkList.length; index++) {
      let item = task.checkList[index];
      if (typeof item.id !== "string" || item.id.trim() === "") {
        errors.error = `Checklist item ${index + 1} has an invalid Id.`;
        return errors;
      }
      if (typeof item.task !== "string" || item.task.trim() === "") {
        errors.error = `Checklist item ${index + 1} has an Invalid Task.`;
        return errors;
      }
      if (typeof item.status !== "boolean") {
        errors.error = `Checklist item ${index + 1} has an Invalid Status.`;
        return errors;
      }
    }
  }

  // Validate date if present
  // if (task.date && isNaN(Date.parse(task.date))) {
  //   errors.error = "Invalid date.";
  //   return errors;
  // }

  return {
    valid: true,
    error: "",
  };
}
