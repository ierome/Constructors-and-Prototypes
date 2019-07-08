function it(description, contents){
    console.log('\n\n"It '+ description + '"');
    contents();
  }
  
  // A simple function for expecting values
  // Ex: expect(sadie.color).toBe('black'); // should return true
  function expect(target) {
    return {
      toBe: function(expectation) {
        if (target === expectation) {
          console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
          return true;
        } else {
          console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
          return false;
        }
      }
    }
  }



class Dog {
    constructor(obj, {}) {
        this.color = obj.hasOwnProperty('color') ? obj.color : 'black';
        this.hungry = obj.hasOwnProperty('hungry') ? obj.hungry : 'true';
    }

}
var sadie = new Dog({
    color: "black",
    hungry: false
  });

var moonshine = new Dog({
    color: "blue-red"
  });
  
var atticus = new Dog();
  
  it("should make Sadie black", function(){
    expect(sadie.color).toBe('black');
  });
  
  it("should be make Moonshine hungry and Sadie not hungry", function(){
    expect(moonshine.hungry).toBe(true);
    expect(sadie.hungry).toBe(false);
  });
  
  it("should make Moonshine no longer hungry when you feed him", function(){
    expect(moonshine.hungry).toBe(false);
  });