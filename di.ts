export class exampleDi {
    name: any;
    constructor(name: any) {
        this.name = name;
    }
    names() {
        return this.name + ' name : ';
    }
}

export class example {
    name: any;
    constructor(private _exampleDi: exampleDi) {
        this.name = _exampleDi.name;
    }
    getUserData() {
        return this._exampleDi.names()
    }
}