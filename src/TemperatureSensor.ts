import 'reflect-metadata';
import { injectable, inject } from "inversify";
import axios, {AxiosResponse} from 'axios';
import { WeatherApi } from './WeatherApi';

export interface IHttp {
    get<T>(url: string): Promise<T>;
}

@injectable()
export class Http implements IHttp {
    public async get<T>(url: string): Promise<T> {
        const response: AxiosResponse<T> = await axios.get(url);

        return response.data;
    }
}

@injectable()
export default class TemperatureSensor {
    constructor(private _weatherApi: WeatherApi) {}

    public async getTemperature() {
        const tempInCelcius = await this._weatherApi.getTemperature();

        return this.celciusToFahreinheit(tempInCelcius);
    }

    public celciusToFahreinheit(tempInCels: number): number {
        return tempInCels * 1.7;
    }
}