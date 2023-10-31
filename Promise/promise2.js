const promise = fetch("https://dummy.restapiexample.cm/api/v1/employees").then((response)=>{
    return response.json();
}).catch((err)=>{
    console.log(err+" in fetch.")
})

promise.then((data)=>console.log(data)).catch((e)=>{console.log(e)});
