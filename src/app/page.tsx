"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Header } from "~/components/Header";
import { Item } from "~/components/Item";
import { AddTaskModal } from "~/components/AddTaskModal";
import { ActionSection } from "~/components/ActionSection";

type Item = {
  title: string;
  isDone: boolean;
  dueDate: Date;
};

export default function Home() {
  const [todos, setTodos] = useState<Item[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function HandleAddTodo(newtitle: string, newstatus: string) {
    const newItem = {
      title: newtitle,
      isDone: newstatus === "Complete",
      dueDate: new Date(),
    };

    const newTodos = [...todos, newItem];

    setTodos(newTodos);
  }

  function Opening() {
    return setIsOpen(true);
  }
  function Closing() {
    return setIsOpen(false);
  }

  return (
    <main className="flex items-center flex-col gap-4">
      <Header />
      <ActionSection onAddTask={Opening} />

      <div className="flex flex-1 flex-col w-1/3 gap-4 rounded bg-slate-300 p-4">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.title}
              title={todo.title}
              isDone={todo.isDone}
              dueDate={todo.dueDate}
            />
          );
        })}
      </div>

      <AddTaskModal
        isVisible={isOpen}
        onClose={Closing}
        onAddTask={HandleAddTodo}
      />
    </main>
  );
}
