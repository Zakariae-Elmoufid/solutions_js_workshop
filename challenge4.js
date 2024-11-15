let mainArray = [12,3,-5,8,15,38,-16];

function separateAndSort(){
   let peersArray = [];
   let oddArray = [];
   mainArray.forEach(element => {
    if(element%2 == 0 ){
        peersArray.push(element);
    }else {
        oddArray.push(element);
    }
    console.log(peersArray );
    console.log(oddArray);
});
}
separateAndSort()
