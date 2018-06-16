"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ICommandAnnotation_1 = require("./ICommandAnnotation");
var NadeCommand = /** @class */ (function () {
    function NadeCommand(client) {
        this.client = client;
        this.cmd = "!nades";
        this.Client = client;
    }
    NadeCommand.prototype.getHelpText = function () {
        return "filter !nades in the following way: !nades nadeType map side site e.g. '!nades smoke overpass t a' to show t-side nades relevant to the a site on overpass";
    };
    NadeCommand.prototype.resolve = function (cmdParams) {
    };
    NadeCommand = __decorate([
        ICommandAnnotation_1.ICommand.register
    ], NadeCommand);
    return NadeCommand;
}());
exports.NadeCommand = NadeCommand;
//# sourceMappingURL=Command.js.map