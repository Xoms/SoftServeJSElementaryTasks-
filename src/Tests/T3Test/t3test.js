describe ("Testing of Task3", function(){

describe("Task3.validateParams(triangle)", function() {

    it(`Sides of triangle isNaN`, function() {
        //inputs
        let triangle = {}; //object with sides of each envelope        
        triangle.vertices = "ABC";
        triangle.a = "abc";
        triangle.b = 1;
        triangle.c = 1;
        let expected = 1; //errState        
        let actual = Task3.validateParams(triangle);    
        assert.equal(expected, actual);
    });
    it (`Sides of triangle !(isNaN) but <= 0`, function() {
        //inputs
        let triangle = {}; //object with sides of each envelope        
        triangle.vertices = "ABC";
        triangle.a = 0;
        triangle.b = 1;
        triangle.c = 1;
        let expected = 2; //errState        
        let actual = Task3.validateParams(triangle);    
        assert.equal(expected, actual);
    });
    it (`Sides of triangle !(isNaN); > 0 but this triangle can't exist`, function() {
        //inputs
        let triangle = {}; //object with sides of each envelope        
        triangle.vertices = "ABC";
        triangle.a = 2;
        triangle.b = 1;
        triangle.c = 1;
        let expected = 4; //errState        
        let actual = Task3.validateParams(triangle);    
        assert.equal(expected, actual);
    });
    it (`Sides of triangle are ok, but vertices.length !== 3`, function() {
        //inputs
        let triangle = {}; //object with sides of each envelope        
        triangle.vertices = "ABCD";
        triangle.a = 1;
        triangle.b = 1;
        triangle.c = 1;
        let expected = 5; //errState        
        let actual = Task3.validateParams(triangle);    
        assert.equal(expected, actual);
    });
    it (`Sides of triangle are ok, but vertices.length === 3, but they are ![A-Z]`, function() {
        //inputs
        let triangle = {}; //object with sides of each envelope        
        triangle.vertices = "cde";
        triangle.a = 1;
        triangle.b = 1;
        triangle.c = 1;
        let expected = 5; //errState        
        let actual = Task3.validateParams(triangle);    
        assert.equal(expected, actual);
    });
    it (`Sides of triangle are ok, but vertices.length === 3, letters are [A-Z], 
        but there are some equals`, function() {
        //inputs
        let triangle = {}; //object with sides of each envelope        
        triangle.vertices = "ABA";
        triangle.a = 1;
        triangle.b = 1;
        triangle.c = 1;
        let expected = 5; //errState        
        let actual = Task3.validateParams(triangle);    
        assert.equal(expected, actual);
    });

});

});
mocha.run();