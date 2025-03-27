function closureIntro(){
  let a=10;
  return function (){
    a++;
    return a;
  }

}

let x= closureIntro();

console.log(x())