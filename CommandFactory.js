"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ICommandAnnotation_1 = require("./ICommandAnnotation");
var Command_1 = require("./Command"); // remove
var CommandFactory = /** @class */ (function () {
    function CommandFactory() {
    }
    CommandFactory.prototype.resolve = function (client, cmd) {
        var cmds = ICommandAnnotation_1.ICommand.GetImplementations();
        console.log("cmds are: " + cmds);
        console.log('trying to resolve: ', cmd);
        return new Command_1.NadeCommand(client); // todo remove
    };
    return CommandFactory;
}());
exports.CommandFactory = CommandFactory;
//# sourceMappingURL=CommandFactory.js.map