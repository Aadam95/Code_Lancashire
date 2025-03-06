import Counter from "@/components/Counter";
import ToDoList from "@/components/ToDoList";
import Image from "next/image";

export default function Home() {
  // node js
  return (
   <div>
    This is my page
    <Counter />
    <ToDoList />
    
   </div>
  );
}