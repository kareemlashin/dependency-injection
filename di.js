export class exampleDi {
    name;

    constructor() {}

    names() {
        return this.name + ' name : ';
    }
}

export class example {
    constructor(exampleDi) {
        this.name = exampleDi.name;
    }
    getUserData() {
        return this.exampleDi.names(this.name);
    }
}