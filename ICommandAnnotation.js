"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ICommand;
(function (ICommand) {
    var implementations = [];
    function GetImplementations() {
        return implementations;
    }
    ICommand.GetImplementations = GetImplementations;
    function register(ctor) {
        implementations.push(ctor);
        return ctor;
    }
    ICommand.register = register;
})(ICommand = exports.ICommand || (exports.ICommand = {}));
//# sourceMappingURL=ICommandAnnotation.js.map