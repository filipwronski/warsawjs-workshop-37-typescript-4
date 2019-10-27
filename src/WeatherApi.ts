import { inject, injectable } from "inversify";
import { Types } from "./IoC/Types";
import { IHttp } from "./TemperatureSensor";

interface IWeatherApiDto {
    current_temp: number;
}
@injectable()
export class WeatherApi {

    constructor(@inject(Types.IHttp) private _http: IHttp ) {

    }

    public async getTemperature(): Promise<number> {
        const dto: IWeatherApiDto = await this._http.get<IWeatherApiDto>('http://localhost:3000/data');
        const temperature = +dto.current_temp;


        return temperature;
    }
}