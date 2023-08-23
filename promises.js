
// const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0506f1ec3c4d48319cf6cb49f0cca3ea'
const url = 'https://catfact.ninja/fact'
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error); 
            })
            .finally(()=>{
              console.log("Fetched")  
            });
    });
}

fetchData(url)
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });