"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PlusCircle, X } from "lucide-react";
import { submitProject } from "@/lib/actions";

export default function SubmitProjectForm() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      formData.append("todos", JSON.stringify(todos));
      const result = await submitProject(formData);
      if (result.success) {
        router.push("/thank-you");
      } else {
        setError(
          result.error || "An error occurred while submitting the project.",
        );
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form action={handleSubmit} className="space-y-6">
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <div>
        <Label htmlFor="title">Project Title</Label>
        <Input id="title" name="title" required />
      </div>
      <div>
        <Label htmlFor="description">Project Description</Label>
        <Textarea id="description" name="description" required />
      </div>
      <div>
        <Label htmlFor="skills">Required Skills (comma-separated)</Label>
        <Input id="skills" name="skills" required />
      </div>
      <div>
        <Label htmlFor="budget">Budget</Label>
        <Input
          id="budget"
          name="budget"
          type="number"
          min="0"
          step="0.01"
          required
        />
      </div>

      <div>
        <Label>Todo Items (Optional)</Label>
        <div className="flex space-x-2 mb-2">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a todo item"
          />
          <Button type="button" onClick={handleAddTodo}>
            <PlusCircle className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-muted p-2 rounded"
            >
              <span>{todo}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveTodo(index)}
              >
                <X className="w-4 h-4" />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Project"}
      </Button>
    </form>
  );
}
