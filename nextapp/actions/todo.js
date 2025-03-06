"use server"


// use server
// async
// revalidate cache, redirect to other page
export async function createTodo(todoTitle)
{
    
    // server side code
    // console.log("ran on server", todoTitle)

    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
            title: todoTitle,
            completed: false,
            id: 99
        })
        
    })
   
    return await res.json()
}

export async function getTodos()
{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        // next:{
        //     revalidate: 20
        // }
        // cache:: "no-store"
    return await res.json()
}