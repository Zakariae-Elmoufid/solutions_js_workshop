let mainArray = [12,3,-5,8,15,38,-16];

function separateAndSort(){

    for(let i = 0 ; i < mainArray.length ; i++){
        for(let j = i+1 ; j <mainArray.length ; j++){
            if(mainArray[i] > mainArray[j]){
                let swap = mainArray[i] ;
                mainArray[i] = mainArray[j];
                mainArray[j] = swap ;
            }
        }
    }
   
   let peersArray = [];
   let oddArray = [];

   mainArray.forEach(element => {
    if(element%2 == 0){
        peersArray.push(element);
    }else {
        oddArray.push(element);
    }
});
console.log(peersArray );  

console.log(oddArray);
}
separateAndSort()
