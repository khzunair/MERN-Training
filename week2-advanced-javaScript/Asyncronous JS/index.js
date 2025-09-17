// function fetchData(callback){
//     setTimeout(()=>{
//         const data = "Data Fetched Sucessfuly"
//         callback(data)
//     }, 3000)
// }


// function processData(data){
//     console.log("Processing: ", data)
// }


// fetchData(processData)


function second() {
    console.log('Second function is running.');
  }
  
  function first() {
    console.log('First function is running.');
    second();
    console.log('First function is done.');
  }
  
  first();
  
  
  
  
  
  
  
  
  
  
  