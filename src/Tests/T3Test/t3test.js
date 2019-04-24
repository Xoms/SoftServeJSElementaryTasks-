describe ("Testing of Task3 (triangles sorting)", function(){

describe("Task3.validateParams(triangle)", function() {
    it(`All is ok, errState expected 0`, function() {
        //inputs
        let triangle = {}; //object with triangle sides and vertices        
        triangle.vertices = "ABC";
        triangle.a = 1;
        triangle.b = 1;
        triangle.c = 1;
        let expected = 0; //errState        
        let actual = Task3.validateParams(triangle);    
        assert.equal(expected, actual);
    });

    it(`Sides of triangle isNaN`, function() {
        //inputs
        let triangle = {}; //object with triangle sides and vertices        
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
        let triangle = {}; //object with triangle sides and vertices        
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
        let triangle = {}; //object with triangle sides and vertices        
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
        let triangle = {}; //object with triangle sides and vertices        
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
        let triangle = {}; //object with triangle sides and vertices        
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
        let triangle = {}; //object with triangle sides and vertices        
        triangle.vertices = "ABA";
        triangle.a = 1;
        triangle.b = 1;
        triangle.c = 1;
        let expected = 5; //errState        
        let actual = Task3.validateParams(triangle);    
        assert.equal(expected, actual);
    });
});

describe("Task3.getHalfP(a, b, c)", function() {
    it(`(a = 1, b = 1, c = 1) expected halfP = 1.5`, function() {
        //inputs
        let a = 1; //sides of triangle        
        let b = 1;
        let c = 1;        
        let expected = 1.5; //half of perimeter      
        let actual = Task3.getHalfP(a,b,c);    
        assert.equal(expected, actual);
    });
    it(`(a = 2, b = 2, c = 2) expected halfP = 3`, function() {
        //inputs
        let a = 2; //sides of triangle        
        let b = 2;
        let c = 2;        
        let expected = 3; //half of perimeter      
        let actual = Task3.getHalfP(a,b,c);    
        assert.equal(expected, actual);
    });    
});

describe("Task3.getSquare(a, b, c, halfP)", function() {
    it(`(a = 1, b = 1, c = 1, halfP = 1.5) expected s = 0.4330127018922193`, function() {
        //inputs
        let a = 1; //sides of triangle        
        let b = 1;
        let c = 1;
        let halfP = 1.5;  //half of perimeter       
        let expected = 0.4330127018922193; //S      
        let actual = Task3.getSquare(a, b, c, halfP);    
        assert.equal(expected, actual);
    });
    it(`(a = 2, b = 2, c = 2, halfP = 3) expected S = 1.7320508075688772`, function() {
        //inputs
        let a = 2; //sides of triangle        
        let b = 2;
        let c = 2;
        let halfP = 3;  //half of perimeter       
        let expected = 1.7320508075688772; //S     
        let actual = Task3.getSquare(a, b, c, halfP);    
        assert.equal(expected, actual);
    });    
});

describe("isTriangle(a,b,c)", function() {
    it(`(a = 1, b = 1, c = 1) expected true`, function() {
        //inputs
        let a = 1; //sides of triangle        
        let b = 1;
        let c = 1;           
        let expected = true;       
        let actual = isTriangle(a,b,c);    
        assert.equal(expected, actual);
    });
     it(`(a = 1, b = 1, c = 3) expected false`, function() {
        //inputs
        let a = 1; //sides of triangle        
        let b = 1;
        let c = 3;           
        let expected = false;       
        let actual = isTriangle(a,b,c);    
        assert.equal(expected, actual);
    });   
    it(`(a = 2, b = 1, c = 1) expected false`, function() {
        //inputs
        let a = 2; //sides of triangle        
        let b = 1;
        let c = 1;           
        let expected = false;       
        let actual = isTriangle(a,b,c);    
        assert.equal(expected, actual);
    });   
});


});
mocha.run();