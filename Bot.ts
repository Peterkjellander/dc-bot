import * as discord from 'discord.js'
import { NadeCommand } from './Command';
import { CommandFactory } from './CommandFactory'

export class Bot {
    private Client: discord.Client
    private cmdFactory: CommandFactory
    public start() {
        this.Client = new discord.Client();
        this.Client.login('MjUyMzk3ODM0NTI2MTMwMTc3.Df2lKQ.myA0cFPY0NcoiXuJ3MR6jieVLz4');
        this.cmdFactory =  new CommandFactory();

        this.Client.on('message', message => {
            if (message.content.startsWith('!') && message.content.length > 1) {
                this.cmdFactory.resolve(this.Client, message.content);
            }
        })
    }
}