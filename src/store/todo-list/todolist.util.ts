import { TodoPayload } from "./todolist.types";
import { nanoid } from "@reduxjs/toolkit";

export const todoCreator = (todoPayload: TodoPayload) => ({
    ...todoPayload,
    id: nanoid(),
})