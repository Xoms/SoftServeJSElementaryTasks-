describe ("Testing of Task7 (Fibonacci sequence)", function(){

describe(`Task7.validateParams(context) where context is object 
    with length of digits of max fibonacci number (len), 
    and fibonacci numbers in range (from...to) `, function() {

    it(`All is ok, errState expected 0`, function() {
        //inputs
        let context = {}; 
        context.len = 3;
        context.from = 2;
        context.to = 10;
        let expected = 0;       
        let actual = Task7.validateParams(context);    
        assert.equal(expected, actual);
    });
    it(`NaN, errState expected 1`, function() {
        //inputs
        let context = {}; 
        context.len = "asd";
        context.from = 2;
        context.to = 10;
        let expected = 1;       
        let actual = Task7.validateParams(context);    
        assert.equal(expected, actual);
    });   
    it(`not positive, errState expected 2`, function() {
        //inputs
        let context = {}; 
        context.len = -1;
        context.from = 2;
        context.to = 10;
        let expected = 2;       
        let actual = Task7.validateParams(context);    
        assert.equal(expected, actual);
    });
    it(`len - not Integer, errState expected 3`, function() {
        //inputs
        let context = {}; 
        context.len = 1.5;
        context.from = 2;
        context.to = 10;
        let expected = 3;       
        let actual = Task7.validateParams(context);    
        assert.equal(expected, actual);
    });
    it(`'len > 6 digits, errState expected 12`, function() {
        //inputs
        let context = {}; 
        context.len = 7;
        context.from = 2;
        context.to= 10;
        let expected = 12;       
        let actual = Task7.validateParams(context);    
        assert.equal(expected, actual);
    });
});
describe(`Task7.run(context) where context is object 
    with length of digits of max fibonacci number (len), 
    and max fibonacci numbers in range (from .. to), will calculate arrays with help of 
    functions inside of closure `, function() {

    it(`array calculated ByLen (expectedByLen) = [1,1,2,3,5,8,13,21,34,55,89]
        array calculated byRange (expectedInRange) = [2,3,5,8]`, function() {
        //inputs
        let context = {}; 
        context.len = 2;
        context.from = 2;
        context.to = 10;
        //for len
        let expectedByLen = [1,1,2,3,5,8,13,21,34,55,89]; 
        let expectedInRange = [2,3,5,8];     
        let actual = Task7.run(context);
        assert.deepEqual(expectedByLen, actual.arrByLength);
        assert.deepEqual(expectedInRange, actual.arrInRange);
    });
});
});
mocha.run();