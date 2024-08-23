//task 2 and 3
function simulateDelay(callback){
    setTimeout(()=>{
        callback();

    },5000); //5 sec
}
//function to button click
function onButtonClick(){
    simulateDelay(()=>{
        document.getElementById('priyamsg').textContent='callback print after 5 sec';
        console.log("wait 5 sec");

    });
}
document.getElementById('click me').addEventListener('click',onButtonClick);

//simulate delay with callback
function simulateDelay(callback){
    setTimeout(()=>{
        callback();
    },5000);
}

// fetch data from api and response it
function fetchData(callback) {
    fetch('https://dummyjson.com/posts')
    .then(response=> response.json())
    .then(data=>{
        const postTitles=data.posts.map(post=> post.title).join('<br>');
        callback(postTitles);
    }) 
    .catch(error=>{
        console.error('error fetch data:',error);
        callback('error fetching data');
    });
}

//handle button click
function onButtonClick(){
    simulateDelay(()=>{
        fetchData((postTitles) => {
            document.getElementById('priyamsg').innerHTML=postTitles;

        });
        
    });
}
document.getElementById('click me').addEventListener('click',onButtonClick);