import { injectable, inject } from 'inversify';
import { ConsoleLogger, ILogger } from './ConsoleLogger';
import { Types } from './IoC/Types';

@injectable()

export class Main
{
    constructor(@inject(Types.ILogger) private _log: ILogger)
    { }

    public async Start(): Promise<void>
    {
        this._log.log('start');
    }
}
