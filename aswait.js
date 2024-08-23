// task 2 js file and asyn/wait


document.getElementById('fetchbutton').addEventListener('click' ,async()=> {
    const dataDiv=document.getElementById('data');
    dataDiv.textContent='loadingggg......';

    try{
        const response=await fetch('https://dummyjson.com/posts');

        if(!response.ok) {
            throw new Error('network res was not okay');

        }
        const data=await response.json();
        dataDiv.textContent=JSON.stringify(data.posts,null,2);

    }catch(error){
        dataDiv.textContent=`Error: ${error.message}`;

    }

});
// task 3 handling and error handling
document.getElementById('fetchbutton').addEventListener('click',async()=>{
    const dataDiv=document.getElementById('data');
    dataDiv.textContent='loading..........';
    const fetchWithTimeout=(url,timeout=5000)=>{
        return Promise.race([
            fetch(url),
            new Promise((_, reject)=>
            setTimeout(()=>reject(new Error('operation time out')),timeout)
        )
        ]);
    };
    try{
        const response=await fetchWithTimeout('https:dummyjson.com/posts');
        if(!response.ok){
            throw new Error('network response not ok');
        }
        
        const data = await response.json();
        dataDiv.textContent = JSON.stringify(data.posts, null, 2);
    } catch (error) {
        dataDiv.textContent = `Error: ${error.message}`;
    }

    
});