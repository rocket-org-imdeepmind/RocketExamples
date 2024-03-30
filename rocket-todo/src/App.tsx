import React, { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeProvider } from "@/components/theme-provider";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type TODO = {
  id: string;
  todo: string;
};

export default function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<TODO>>([]);

  const handleAddTodo = useCallback(() => {
    if (todo) {
      setTodos((oldTodos) => [
        ...oldTodos,
        { id: (+new Date()).toString(), todo },
      ]);
      setTodo("");
    }
  }, [todo]);

  const handleTodoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodo(e.target.value);
    },
    []
  );

  const handleTodoDelete = useCallback(
    (id: string) => {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    },
    [todos]
  );

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">+ New TODO</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add TODO</SheetTitle>
            <SheetDescription>Type something to add as TODO</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={todo}
                onChange={handleTodoChange}
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" onClick={handleAddTodo}>
                Save TODO
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {todos.map((todo) => (
        <Card key={todo.id}>
          <CardHeader>
            <CardTitle>{todo.todo}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => handleTodoDelete(todo.id)}>Delete</Button>
          </CardFooter>
        </Card>
      ))}
    </ThemeProvider>
  );
}
