
describe ("Testing of Task5 (Lucky tickets)", function(){

describe(`Task5.validateParams(context) where context is object 
    with range from min to max`, function() {

    it(`All is ok, errState expected 0`, function() {
        //inputs
        let context = {}; 
        context.min = 1000;
        context.max = 1004;
        let expected = 0;       
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
    it(`min or max < 0 , errState expected 2`, function() {
        //inputs
        let context = {}; 
        context.min = 1;
        context.max = -1;
        let expected = 2;        
        let actual = Task5.validateParams(context);    
        assert.equal(expected, actual);
    });
    it(`min or max length >6  , errState expected 3`, function() {
        //inputs
        let context = {}; 
        context.min = 1234567;
        context.max = 1;
        let expected = 3;        
        let actual = Task5.validateParams(context);    
        assert.equal(expected, actual);
    });
    it(`min === max, errState expected 4`, function() {
        //inputs
        let context = {}; 
        context.min = 1;
        context.max = 1;
        let expected = 4;        
        let actual = Task5.validateParams(context);    
        assert.equal(expected, actual);
    });
});
describe(`Task5.generateTicketNumbers(min, max)`, function() {

    it(`min = 1, max = 3, expected ["000001", "000002", "000003"]`, function() {
        //inputs        
        let min = 1;
        let max = 3;
        let expected = ["000001", "000002","000003"];     
        let actual = Task5.generateTicketNumbers(min, max);    
        assert.deepEqual(expected, actual);
    });
});
describe(`Task5.compareMethods(context), calculates, which method win`, function() {

    it(`context.ticketsArr["001001", "020002", "300003"], expected 1`, function() {
        //inputs        
        let context = {}; 
        context.ticketsArr = ["001001", "020002", "300003"];
        let expected = 1;        
        let actual = Task5.compareMethods(context);    
        assert.equal(expected, actual);
    });
    it(`context.ticketsArr["111221", "663333", "300003"], expected 2`, function() {
        //inputs        
        let context = {}; 
        context.ticketsArr = ["111221", "663333", "300003"];
        let expected = 2;        
        let actual = Task5.compareMethods(context);    
        assert.equal(expected, actual);
    });
    it(`context.ticketsArr["111221", "300003"], expected 0`, function() {
        //inputs        
        let context = {}; 
        context.ticketsArr = ["111221", "300003"];
        let expected = 0;        
        let actual = Task5.compareMethods(context);    
        assert.equal(expected, actual);
    });
});
});
mocha.run();