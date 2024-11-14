let array = [12,"appel","student",100,"A"];
let element = 100;

function rechercheElement(array,element){
    for(let i=0;i<array.length;i++){
       if(array[i]===element){
        return i;
        }
    }
    return -1 ;
}
console.log(rechercheElement(array,element));