function closureIntro(){
  let a=10;
  return function (){
    a++;
    return a; 
  }

}

function createCounter(){
  let count=0;
  return function(){
    count++;
    return count;
  }
}

function rateLimiter(fn, limit){
  let lastCall=0;
  return function(...args){
    let now= Date.now();
    if(now-lastCall<limit){
       return "Rate limit exceeded"
    }
    lastCall= now;
    return fn(...args)
  }

}

