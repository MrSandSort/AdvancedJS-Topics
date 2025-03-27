function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success= true;
            if(success){
                resolve('Data fetched successfully');
            }
            else{
                reject('Data not fetched');
            }

        }, 3000)
    })
}

fetchData().then((data)=>{return console.log(data.toLowerCase())}).catch((error)=>{console.error(error)})