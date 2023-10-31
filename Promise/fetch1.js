
const API_URL = "https://api.github.com/users/Sahyadri-1674";

async function handleAPICall(){
    const promise = await fetch(API_URL);
    const data = await promise.json();
    console.log(data);
}

handleAPICall();
