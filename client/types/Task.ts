export enum Priority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export enum Stage {
  BACKLOG = "BACKLOG",
  TO_DO = "TO DO",
  IN_PROGRESS = "IN PROGRESS",
  DONE = "DONE",
}

export interface ChecklistItem {
  id: string;
  status: boolean;
  task: string;
}

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  checkList: ChecklistItem[];
  dueDate?: string | null;
  status: Stage;
  assignee: string;
}

export interface ValidateTaskReturnType {
  valid: boolean;
  error: string;
}
