
export  class exampleWithout {
    constructor(name) {
        this.name = name;
      }
    
      getUserData() {
        return this.name+' name : ';
      }
}
const example = new exampleWithout();
