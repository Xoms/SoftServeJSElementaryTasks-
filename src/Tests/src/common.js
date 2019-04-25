function isTriangle(a,b,c){
    //used and tested in Task3
    return ((a + b) > c && 
            (b + c) > a && 
            (a + c) > b );
}

function isPositive(){   
    function func(n){ 
        return n > 0;
    };
    let args = [].slice.call(arguments);
    return args.every(func);
}
   
function isNaNArgs(){ 
    function func(n){        
        return isNaN(n); 
    };
    let args = [].slice.call(arguments);    
    return args.some(func);
}

function isInteger(){
    function func(n){
        //XOR
        return (n ^ 0) === n;
    }
    let args = [].slice.call(arguments);
    return args.every(func);
};



