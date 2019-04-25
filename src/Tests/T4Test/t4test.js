describe ("Testing of Task4 (Finding palindromes)", function(){

describe(`Task4.validateParams(params) returns errState, 
    params are user's sequence of digits (must be: notIsNaN,
    value > 10, sequence.length <=6 `, function() {    

    it(`All is ok, errState expected 0`, function() {
        //inputs
        let params = 11; 
        let expected = 0;        
        //data are correct
        let actual = Task4.validateParams(params);    
        assert.equal(expected, actual);
    });
    it(`params isNaN, errState expected 1`, function() {
        //inputs
        let params = "as";
        let expected = 1;
        let actual = Task4.validateParams(params);    
        assert.equal(expected, actual);
    });
    it(`params < 10, errState expected 1`, function() {
        //inputs
        let params = "as";
        let expected = 1;
        let actual = Task4.validateParams(params);    
        assert.equal(expected, actual);
    });
    it(`params quantity of digits > 10 (i.e. 9999999999), errState expected 1`,
        function() {
        //inputs
        let params = 10000000000; //length 11
        let expected = 1;
        let actual = Task4.validateParams(params);    
        assert.equal(expected, actual);
    });
});
describe(`Task4.run(inpStr) returns finded palindromes and their ammount`,
    function() { 
    
    it(`inpStr = 121`, function() {
    //inputs
    let inpStr = "121"; 
    let expected = {palindromes: "Palindromes " + inpStr +' ',
                    cnt: 1};
    //data are correct
    let actual = Task4.run(inpStr);    
    assert.deepEqual(expected, actual);
    });

});
});
mocha.run();