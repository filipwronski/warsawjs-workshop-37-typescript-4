import { injectable, inject } from 'inversify';
import { ConsoleLogger, ILogger } from './ConsoleLogger';
import { Types } from './IoC/Types';
import TemperatureSensor from './TemperatureSensor';

@injectable()

export class Main
{
    constructor(@inject(Types.ILogger) private _log: ILogger, private _temp: TemperatureSensor)
    { }

    public async Start(): Promise<void>
    {
        const temperature = await this._temp.getTemperature();

        this._log.log('Sensor temperature: ' + temperature + ' *F');
    }
}
