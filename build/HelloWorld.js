var Hello = (function () {
    function Hello(value) {
        this._message = value;
    }
    Object.defineProperty(Hello.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Hello.prototype.say = function () {
        console.log(this._message);
    };
    return Hello;
}());
var hello = new Hello("Hello World!");
hello.say();
