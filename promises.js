document.getElementById('fetchbutton').addEventListener('click',()=> {
    const dataDiv=document.getElementById('data');
    dataDiv.textContent='loading..........';
 //promises creating and fetching data used json
 const fetchData=new Promise((resolve,reject) =>{
    const timeout=setTimeout(()=>{
        reject('operation timed out');

    },5000);

    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
     .then(data => {
     clearTimeout(timeout);
     resolve(data);
     })
    .catch(() => {
     clearTimeout(timeout);
    reject('Failed to fetch data.');
   });

 });


//handle promises error handling
fetchData
.then(data=> {
    dataDiv.textContent=JSON.stringify(data.posts,null,2);

      })
      .catch(error=>{
    dataDiv.textContent=error;
       });

});