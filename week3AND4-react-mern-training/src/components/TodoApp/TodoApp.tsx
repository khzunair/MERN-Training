import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input.trim()]);
    setInput("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
    const newCompleted = new Set(completed);
    newCompleted.delete(index);
    setCompleted(newCompleted);
  };

  const toggleComplete = (index: number) => {
    const newCompleted = new Set(completed);
    if (newCompleted.has(index)) newCompleted.delete(index);
    else newCompleted.add(index);
    setCompleted(newCompleted);
  };

  return (
    <div className="max-w-sm mx-auto p-4 space-y-4">
      <h1>To DO APP- </h1>
      <div className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
          placeholder="Add a task"
        />
        <button onClick={addTask} className="px-3 py-1 bg-black text-white rounded">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center border rounded px-2 py-1">
            <span
              onClick={() => toggleComplete(index)}
              className={`${completed.has(index) ? "line-through text-gray-500" : ""} cursor-pointer`}
            >
              {task}
            </span>
            <button onClick={() => deleteTask(index)} className="text-red-500">
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
