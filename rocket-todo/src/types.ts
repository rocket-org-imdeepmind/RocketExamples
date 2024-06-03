export interface ITodo {
    id: string;
    status: string;
    targetTime: string;
    task: string;
  }

  export interface ITodoFormProps {
    addTodo: (text: string) => void;
    loading: boolean;
  }

  export interface ITodoProps {
    todo: ITodo;
    index: number;
    completeTodo: (index: number) => void;
    removeTodo: (index: number) => void;
    editTodo: (index: number, newText: string) => void;
  }
  