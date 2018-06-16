import { ICommand } from './ICommandAnnotation';
import { NadeCommand } from './Command'; // remove
//import { Client } from 'discord.js';
import * as discord from 'discord.js';

export class CommandFactory {
    constructor() {}
    public resolve(client: discord.Client, cmd: string): ICommand.ICommand {
        var cmds = ICommand.GetImplementations();
        console.log("cmds are: " + cmds);
        console.log('trying to resolve: ' cmd);
        return new NadeCommand(client); // todo remove
    }
}
