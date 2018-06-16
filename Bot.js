"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord = __importStar(require("discord.js"));
var CommandFactory_1 = require("./CommandFactory");
var Bot = /** @class */ (function () {
    function Bot() {
    }
    Bot.prototype.start = function () {
        var _this = this;
        this.Client = new discord.Client();
        this.Client.login('MjUyMzk3ODM0NTI2MTMwMTc3.Df2lKQ.myA0cFPY0NcoiXuJ3MR6jieVLz4');
        this.cmdFactory = new CommandFactory_1.CommandFactory();
        this.Client.on('message', function (message) {
            if (message.content.startsWith('!') && message.content.length > 1) {
                _this.cmdFactory.resolve(_this.Client, message.content);
            }
        });
    };
    return Bot;
}());
exports.Bot = Bot;
//# sourceMappingURL=Bot.js.map