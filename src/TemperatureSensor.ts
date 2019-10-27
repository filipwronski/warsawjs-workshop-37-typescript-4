import 'reflect-metadata';
import { injectable, inject } from "inversify";
import { Types } from "./IoC/Types";

export interface IHttp {
    get(url: string): number;
}

@injectable()
export class Http implements IHttp {
    public get(url: string): number {
        return 14;
    }
}

@injectable()
export default class TemperatureSensor {
    constructor(@inject(Types.IHttp) private _http: IHttp) {
        
    }

    public getTemperature() {
        const tempInCelcius = this._http.get('192.168.1.7'); //todo move to config

        return this.celciusToFahreinheit(tempInCelcius);
    }

    public celciusToFahreinheit(tempInCels: number): number {
        return tempInCels * 1.7;
    }
}