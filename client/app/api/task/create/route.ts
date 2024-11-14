import Task from "@/lib/models/Task";
import Todo from "@/lib/models/Todo";
import { checkListValidation } from "@/lib/task/validations";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json();
    const { title, status, priority, assignee, dueDate, checklists } = body;
    if (!title || !status || !priority || !checklists) {
      return new NextResponse(
        JSON.stringify({ message: "All fields are required", status: false }),
        { status: 400 }
      );
    }

    if (checklists.length > 2) {
      return new NextResponse(
        JSON.stringify({
          message: "Checklists can't be empty at least 2 task needed",
          status: false,
        }),
        { status: 400 }
      );
    }

    let isValid = checkListValidation(checklists);

    if (isValid?.valid) {
      return new NextResponse(
        JSON.stringify({ message: isValid?.error, status: false }),
        { status: 400 }
      );
    }

    let allTodosInstance = new Array();
    for (let todo of checklists) {
      let instance = await Todo.create({
        title: todo.title,
        completed: todo.status,
      });
      allTodosInstance.push(instance._id);
    }

    const newTask = await Task.create({
      title,
      status,
      priority,
      assignee,
      dueDate,
      checklists: allTodosInstance,
    });

    await newTask.populate("checklists").execPopulate();

    return new NextResponse(
      JSON.stringify({ message: "Task Created", task: newTask }),
      { status: 200 }
    );
  } catch (err : any) {
    console.log(err);
    return new NextResponse("Error processing request"+err.message, { status: 500 });
  }
};
