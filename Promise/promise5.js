const todo = async (data) => {
    const options = {
        method:"POST",
        body:JSON.stringify(data),
        headers:{"Content-type":"application/json"}
    }

    const promise = await fetch("https://jsonplaceholder.typicode.com/posts",options);
    const response = await promise.json();
    return response;
}

const getData = async () => {
    const response = await fetch("https://api.github.com/users/Sahyadri-1674")
    const data = await response.json();
    return data
}

async function main(){
    let todoData = {
      title: "JavaScript",
      body: "Async",
      userId: 1001,
    };

    const result = await todo(todoData);
    console.log(result); 

    const output = await getData();
    console.log(output);
}

main();

