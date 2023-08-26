
export  class exampleWithout {
    name:any;
    constructor(name:any) {
        this.name = name;
      }
    
      getUserData() {
        return this.name+' name : ';
      }
}
const example = new exampleWithout('example');
