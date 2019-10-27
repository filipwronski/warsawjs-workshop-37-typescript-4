import { injectable } from "inversify";


export interface ILogger {
    log(text: string): void
}

@injectable()

export class ConsoleLogger implements ILogger {
    
    i = 0;
    public log (text:string): void
    {
        console.log(this.i++, text);
    }
}