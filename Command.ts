import Discord = require('discord.js');
import { ICommand } from './ICommandAnnotation';

@ICommand.register
export class NadeCommand implements ICommand.ICommand {
    Client: Discord.Client;
    constructor(private client: Discord.Client) {
        this.Client = client;
    }

    cmd = "!nades";
    getHelpText(): string {
        return "filter !nades in the following way: !nades nadeType map side site e.g. '!nades smoke overpass t a' to show t-side nades relevant to the a site on overpass";
    }
    resolve(cmdParams: string) {

    }
}

