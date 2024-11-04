let T = [1,2,3,5,78,8];

function inverserTableau(T){
    // let reverse = [];
    // for(let i = 0 ;i <T.length ;i++){
    //      reverse[T.length-1-i] = T[i];
    // }
    // return reverse;
    let swap = 0 ;
    for(let i = 0 ;i <T.length/2 ;i++){
            swap = T[i];
            T[i] = T[T.length-1-i];
            T[T.length-1-i] = swap;
    }
    return T  ;
}
console.log(inverserTableau(T));