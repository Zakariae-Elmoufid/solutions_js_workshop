let array =[5,12,8,90,3,5];

function  somme(){
    let swap ;
    let troisMax = 0 ;
    for(let i=0;i<array.length-1;i++){
       for(let j=0;j<array.length-i-1;j++){
          if(array[j]<array[j+1]){
              swap =array[j] ;
              array[j]= array[j+1];
              array[j+1]= swap;
          }
       }
    }
    for(let i = 0 ;i<3;i++){
        troisMax += array[i]; 
    }
    return  troisMax;
}
console.log(somme());