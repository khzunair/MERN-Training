import { useEffect, useState } from "react";

type Task = {
  id?: number;
  task?: string;
  done?: boolean;
};
const Todo: React.FC = () => {
  const [task, setTask] = useState<Task>({});
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  const handleTask = () => {
    setTaskList((prev) => [
      ...prev,
      { id: prev.length + 1, task: task.task, done: false },
    ]);
    setTask({});
  };

  const handleToggle = (id?: number) => {
    setTaskList(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDelete = (id?: number) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-bold text-5xl font-semibold">Todo App</h1>
        <div className="flex flex-row items-center">
          <label htmlFor="todo">Task: </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="text"
            placeholder="Add a new todo"
            onChange={(e) => setTask({ ...task, task: e.target.value })}
            value={task.task ?? ""}
          />
        </div>

        <button
          className="bg-green-500 p-2 rounded-2xl text-white hover:shadow-2xl hover:bg-green-600 cursor-pointer"
          onClick={handleTask}
        >
          Add Task
        </button>
      </div>

      <div>
        <h1 className="text-bold text-2xl font-semibold">Tasks List</h1>
        {taskList.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          <ul>
            {taskList.map((item) => (
              <div className="flex" key={item.id}>
                <input
                  checked={item.done}
                  onChange={() => handleToggle(item.id)}
                  type="checkbox"
                />
                <li>{item.task}</li>
                <button
                  className="bg-red-500 text-white px-2 rounded"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Todo;
