describe ("Testing of Task1 (Generate chess string", function(){

describe("Task1.validateParams(length, width, symb)  returns errState", function() {    

    it(`All is ok, errState expected 0`, function() {
        //inputs
        let length = 2; 
        let width = 2; 
        let symb = "*";        
        let expected = 0;
        //data are correct
        let actual = Task1.validateParams(length, width, symb);    
        assert.equal(expected, actual);
    });
    it(`length, width  -  isNaN, errState expected 1`, function() {
        //inputs
        let length = "af"; 
        let width = "dfg"; 
        let symb = "*";        
        let expected = 1;
        //data are correct
        let actual = Task1.validateParams(length, width, symb);    
        assert.equal(expected, actual);
    });
    it(`(length, width) <= 0, errState expected 2`, function() {
        //inputs
        let length = -1; 
        let width = 0; 
        let symb = "*";        
        let expected = 2;
        //data are correct
        let actual = Task1.validateParams(length, width, symb);    
        assert.equal(expected, actual);
    });
    it(`(length, width) are not Integers, errState expected 3`, function() {
        //inputs
        let length = 1.5; 
        let width = .5; 
        let symb = "*";        
        let expected = 3;
        //data are correct
        let actual = Task1.validateParams(length, width, symb);    
        assert.equal(expected, actual);
    });    
    it(`symb is space,  errState expected 4`, function() {
        //inputs
        let length = 2; 
        let width = 2; 
        let symb = " ";        
        let expected = 4;
        //data are correct
        let actual = Task1.validateParams(length, width, symb);    
        assert.equal(expected, actual);
    });
    it(`symb.length == 0 ,  errState expected 4`, function() {
        //inputs
        let length = 2; 
        let width = 2; 
        let symb = "";        
        let expected = 4;
        //data are correct
        let actual = Task1.validateParams(length, width, symb);    
        assert.equal(expected, actual);
    });
    it(`symb.length > 1 ,  errState expected 4`, function() {
        //inputs
        let length = 2; 
        let width = 2; 
        let symb = "as";        
        let expected = 4;
        //data are correct
        let actual = Task1.validateParams(length, width, symb);    
        assert.equal(expected, actual);
    });
});
describe("Task1.generateChessStr(length, width, symb)  returns string", function() {    

    it(`length = 1, width = 1, symb = "*"; expeted string = "*\n"`, function() {
        //inputs
        let length = 1; 
        let width = 1; 
        let symb = "*";        
        let expected = `*\n`;
        //data are correct
        let actual = Task1.generateChessStr(length, width, symb);    
        assert.strictEqual(expected, actual);
    });
    it(`length = 2, width = 2, symb = "*"; expeted string = "*  *\n  *  *\n"`, function() {
        //inputs
        let length = 2; 
        let width = 2; 
        let symb = "*";        
        let expected = `*  *\n  *  *\n`;
        //data are correct
        let actual = Task1.generateChessStr(length, width, symb);    
        assert.strictEqual(expected, actual);
    });
});

});
mocha.run();
