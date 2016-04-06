class Hello {
    private _message: string;
    get message(): string {
        return this._message;
    }
    set message(value: string) {
        this._message = value;
    }
    constructor(value: string) {
        this._message = value;
    }
    public say(): void {
        console.log(this._message);
    }
}
var hello = new Hello("Hello World!");
hello.say();