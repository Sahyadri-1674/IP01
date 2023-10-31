const createTodo = async (todo) => {
  const options = {
    method: "POST",
    body: JSON.stringify(todo),
    headers: { "Content-type": "application/json" },
  };

  const promise = await fetch("https://jsonplaceholder.typicode.com/posts",options);
  const response = await promise.json();
//   console.log("Response:",response);
  return response;
};

const getItems = async (id) => {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
   const data = await res.json();
   return data;
}

const main = async () => {
    const todo = {
        title:"JavaScript",
        body:"Async",
        userId: 1001
    }
    const data = await createTodo(todo);
    console.log(data);

    const entry = await getItems(100);
    console.log(entry);

};

main();
