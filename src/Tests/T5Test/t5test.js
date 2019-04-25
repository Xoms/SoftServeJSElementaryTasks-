
describe ("Testing of Task5 (Lucky tickets)", function(){

describe(`Task5.validateParams(context) where context is object 
    with range from min to max`, function() {

    it(`All is ok, errState expected 0`, function() {
        //inputs
        let context = {}; 
        context.min = 1000;
        context.max = 1004;
        let expected = 0        
        let actual = Task5.validateParams(context);    
        assert.equal(expected, actual);
    });
    it(`min or max - isNaN, errState expected 1`, function() {
        //inputs
        let context = {}; 
        context.min = "asd";
        context.max = 1004;
        let expected = 1;        
        let actual = Task5.validateParams(context);    
        assert.equal(expected, actual);
    });
    it(`min or max < 0 , errState expected 1`, function() {
        //inputs
        let context = {}; 
        context.min = 1;
        context.max = -1;
        let expected = 2;        
        let actual = Task5.validateParams(context);    
        assert.equal(expected, actual);
    });