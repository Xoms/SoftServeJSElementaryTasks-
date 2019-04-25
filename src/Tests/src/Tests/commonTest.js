describe ("Testing of common functions", function(){

describe(`isPositive(arg1 [,arg2 ...]) works with any amount of arguments
    returns "false" if any of args < 0 `, function() {
    it(`(a = 1, b = 1, c = 1) expected true`, function() {
        //inputs
        let a = 1;        
        let b = 1;
        let c = 1;           
        let expected = true;       
        let actual = isPositive(a,b,c);    
        assert.equal(expected, actual);
    });
    it(`(a = 1, b = 1, c = 0) expected false`, function() {
        //inputs
        let a = 1;       
        let b = 1;
        let c = 0;           
        let expected = false;       
        let actual = isPositive(a,b,c);    
        assert.equal(expected, actual);
    });
    it(`(a = 1, b = -1, c = 1) expected false`, function() {
        //inputs
        let a = 1;         
        let b = -1;
        let c = 1;           
        let expected = false;       
        let actual = isPositive(a,b,c);    
        assert.equal(expected, actual);
    });
});

describe(`isNaNArgs(arg1 [,arg2 ...]) works with any amount of arguments
    returns true if any of args isNaN`, function() {
    it(`(a = 1, b = 1, c = 1) expected false`, function() {
        //inputs
        let a = 1;        
        let b = 1;
        let c = 1;           
        let expected = false;       
        let actual = isNaNArgs(a,b,c);    
        assert.equal(expected, actual);
    });
    it(`(a = "1", b = .5, c = 1.5) expected false`, function() {
        //inputs
        let a = "1";        
        let b = .5;
        let c = 1.5;           
        let expected = false;       
        let actual = isNaNArgs(a,b,c);    
        assert.equal(expected, actual);
    });
    it(`(a = "asdf", b = -1, c = 1) expected true`, function() {
        //inputs
        let a = "asdf";         
        let b = -1;
        let c = 1;           
        let expected = true;       
        let actual = isNaNArgs(a,b,c);    
        assert.equal(expected, actual);
    });
});
describe(`isInteger(arg1 [,arg2 ...]) works with any amount of arguments
    returns "false" if any of args is not an Integer `, function() {
    it(`(a = 1, b = 1, c = 1) expected true`, function() {
        //inputs
        let a = 1;        
        let b = 1;
        let c = 1;           
        let expected = true;       
        let actual = isInteger(a,b,c);    
        assert.equal(expected, actual);
    });
    it(`(a = 1, b = .5, c = 1) expected false`, function() {
        //inputs
        let a = 1;        
        let b = .5;
        let c = 1;           
        let expected = false;       
        let actual = isInteger(a,b,c);    
        assert.equal(expected, actual);
    });
    it(`(a = 0, b = 1, c = -1) expected true`, function() {
        //inputs
        let a = 0;        
        let b = 1;
        let c = -1;           
        let expected = true;       
        let actual = isInteger(a,b,c);    
        assert.equal(expected, actual);
    });
    it(`(a = 1, b = 5, c = 1.5) expected false`, function() {
        //inputs
        let a = 1;        
        let b = 5;
        let c = 1.5;           
        let expected = false;       
        let actual = isInteger(a,b,c);    
        assert.equal(expected, actual);
    });
});

});
mocha.run();