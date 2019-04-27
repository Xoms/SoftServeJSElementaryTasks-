describe ("Testing of Task6 (Sequence of squares of numbers)", function(){

describe(`Task6.validateParams(context) where context is object 
    with length of digits of max square (len), 
    and max square (num) `, function() {

    it(`All is ok, errState expected 0`, function() {
        //inputs
        let context = {}; 
        context.len = 3;
        context.num = 1000;
        let expected = 0;       
        let actual = Task6.validateParams(context);    
        assert.equal(expected, actual);
    });
    it(`NaN, errState expected 1`, function() {
        //inputs
        let context = {}; 
        context.len = "asd";
        context.num = "asd";
        let expected = 1;       
        let actual = Task6.validateParams(context);    
        assert.equal(expected, actual);
    });   
    it(`not positive, errState expected 2`, function() {
        //inputs
        let context = {}; 
        context.len = -1;
        context.num = 0;
        let expected = 2;       
        let actual = Task6.validateParams(context);    
        assert.equal(expected, actual);
    });
    it(`len - not Integer, errState expected 3`, function() {
        //inputs
        let context = {}; 
        context.len = 1.5;
        context.num = 10;
        let expected = 3;       
        let actual = Task6.validateParams(context);    
        assert.equal(expected, actual);
    });
    it(`'len > 6 digits, errState expected 12`, function() {
        //inputs
        let context = {}; 
        context.len = 7;
        context.num = 10;
        let expected = 12;       
        let actual = Task6.validateParams(context);    
        assert.equal(expected, actual);
    });
});
describe(`Task6.getResults(context) where context is object 
    with length of digits of max square (len), 
    and max square (num), will calculate arrays with help of 
    functions inside of closure `, function() {

    it(`array calculated ByLen (expectedByLen) = [0,1,2,3,4,5,6,7,8,9]
        array calculated byNum (expectedByNum) = [0,1,2,3]`, function() {
        //inputs
        let context = {}; 
        context.len = 2;
        context.num = 10;
        //for len
        let expectedByLen = [0,1,2,3,4,5,6,7,8,9]; 
        let expectedByNum = [0,1,2,3];     
        let actual = Task6.getResults(context);
        assert.deepEqual(expectedByLen, actual.arrByLength);
        assert.deepEqual(expectedByNum, actual.arrByNum);
    });
});
});
mocha.run();
