export namespace ICommand {
    export interface ICommand {
        getHelpText(): string;
        cmd: string;
        resolve(cmdParams: string): any;
    }

    type Constructor<T> = {
        new(...args: any[]): T;
        readonly prototype: T;
    }
    const implementations: Constructor<ICommand>[] = [];
    export function GetImplementations(): Constructor<ICommand>[] {
        return implementations;
    }
    export function register<T extends Constructor<ICommand>>(ctor: T) {
        implementations.push(ctor);
        return ctor;
    }
}