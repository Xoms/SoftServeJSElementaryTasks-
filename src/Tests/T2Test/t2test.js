describe ("Testing of Task2", function(){

describe("Task2.validateParams(envelope1, envelope2)", function() {

    it(`Производит проверку корректности исходных даных, 
        возвращает true, данные верные`, function() {
        //inputs
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {}; 
        envelope1.ab = 1;
        envelope1.cd = 1;
        envelope2.ab = 1;
        envelope2.cd = 1;
        let expected = true;
        //data are correct
        let actual = Task2.validateParams(envelope1, envelope2);    
        assert.equal(expected, actual);
    });
    it (`Производит проверку корректности исходных даных, 
        возвращает true, данные верные`, function() {
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {};

        envelope1.ab = 1.4;
        envelope1.cd = 1.5;
        envelope2.ab = 0.5;
        envelope2.cd = .7;
        expected = true;
        //data are correct
        actual = Task2.validateParams(envelope1, envelope2);
        assert.equal(expected, actual);
    });
    it (`Производит проверку корректности исходных даных, 
        возвращает false, данные < 0`, function() {
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {};
        envelope1.ab = -1;
        envelope1.cd = 1;
        envelope2.ab = 1;
        envelope2.cd = 1;
        expected = false;

        //data incorrect (<=0)
        actual = Task2.validateParams(envelope1, envelope2);    
        assert.equal(expected, actual);
    });
    it (`Производит проверку корректности исходных даных, 
        возвращает false, данные = 0`, function() {
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {};
        expected = false;
        envelope1.ab = 1;
        envelope1.cd = 0;
        envelope2.ab = 1;
        envelope2.cd = 1;
        //data incorrect (<=0)
        actual = Task2.validateParams(envelope1, envelope2);
        assert.equal (expected,actual);
    });
    it (`Производит проверку корректности исходных даных, 
        возвращает false, данные = NaN`, function() {
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {};
        expected = false;
        envelope1.ab = 1;
        envelope1.cd = 1;
        envelope2.ab = "sdf";
        envelope2.cd = 1;
        //data incorrect (NaN)
        actual = Task2.validateParams(envelope1, envelope2);
        assert.equal (expected,actual);
    });
    it (`Производит проверку корректности исходных даных, 
        возвращает false, данные = NaN`, function() {
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {};
        expected = false;
        envelope1.ab = 1;
        envelope1.cd = 1;
        envelope2.ab = 1;
        envelope2.cd = "1sdf";
        //data incorrect (NaN)
        actual = Task2.validateParams(envelope1, envelope2);
        assert.equal (expected,actual);
    });

});

describe("isDiagEntry(a,b,c,d)", function() {

    it("Вычисляет вхождение конверта #2 по диагонали (не входит)", function() {
        //inputs
        let a = 1; // envelope 1 side a
        let b = 1; // envelope 1 side b
        let c = 1; // envelope 2 side c
        let d = 1; // envelope 2 side d
        let expected = false;
        //is 2-nd can be inside of 1-st
        let actual = isDiagEntry(a,b,c,d);

        assert.equal(expected, actual);
    });
    it("Вычисляет вхождение конверта #2 по диагонали (входит)", function() {
    //inputs
        let a = 10; // envelope 1 side a
        let b = 10; // envelope 1 side b
        let c = 11; // envelope 2 side c
        let d = 1; // envelope 2 side d
        
        expected = true;
        actual = isDiagEntry(a,b,c,d);
        assert.equal(expected, actual);
    });
    it("Вычисляет вхождение конверта #2 по диагонали (не входит, но входит 1-й)", function() {
    //inputs
        let a = 10; // envelope 1 side a
        let b = 10; // envelope 1 side b
        let c = 11; // envelope 2 side c
        let d = 1; // envelope 2 side d
        expected = false;
        actual = isDiagEntry(c,d,a,b);
        assert.equal (expected, actual);
    });

});

describe ("Task2.calcEnvelopeEntries(envelope1, envelope2)", function(){
    it ("Вычисляет вхождения конвертов друг в друга, входит 1-й", function() {
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {};
        envelope1.ab = 1;
        envelope1.cd = 1;
        envelope2.ab = 2;
        envelope2.cd = 2;
        expected = 1;
        actual = Task2.calcEnvelopeEntries(envelope1, envelope2);

        assert.equal (expected, actual);
    });
    it ("Вычисляет вхождения конвертов друг в друга, входит 1-й, по диагонали", function() {
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {};
        envelope1.ab = 1;
        envelope1.cd = 10;
        envelope2.ab = 9;
        envelope2.cd = 9;
        expected = 1;
        actual = Task2.calcEnvelopeEntries(envelope1, envelope2);

        assert.equal (expected, actual);
    });
    it ("Вычисляет вхождения конвертов друг в друга, входит 2-й", function() {
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {};
        envelope1.ab = 2;
        envelope1.cd = 2;
        envelope2.ab = 1;
        envelope2.cd = 1;
        expected = 2;
        actual = Task2.calcEnvelopeEntries(envelope1, envelope2);

        assert.equal (expected, actual);
    });
    it ("Вычисляет вхождения конвертов друг в друга, входит 2-й, по диагонали", function() {
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {};
        envelope1.ab = 9;
        envelope1.cd = 9;
        envelope2.ab = 10;
        envelope2.cd = 1;
        expected = 2;
        actual = Task2.calcEnvelopeEntries(envelope1, envelope2);

        assert.equal (expected, actual);
    });
    it ("Вычисляет вхождения конвертов друг в друга, не входит ни один", function() {
        let envelope1 = {}; //objects with sides of each envelope
        let envelope2 = {};
        envelope1.ab = 10;
        envelope1.cd = 11;
        envelope2.ab = 10;
        envelope2.cd = 12;
        expected = 0;
        actual = Task2.calcEnvelopeEntries(envelope1, envelope2);

        assert.equal (expected, actual);
    });

});


});
mocha.run();