import 'reflect-metadata';
import { Container } from "inversify";
import { Main } from "../Main";
import { ConsoleLogger } from "../ConsoleLogger";
import { Types } from './Types';
import TemperatureSensor, { Http, IHttp } from '../TemperatureSensor';
import { WeatherApi } from '../WeatherApi';

export const IoC = new Container();


// isSingletonScope inTransientScope isRequestScope okresla czy używa jako nowej instancji
// inTransientScope -różne instacje w różnych miejscach
// isRequestScope - te same instancje w obrębie aplikacji różne w obrębie klientów
// isSingletonScope te same instancje samo w obrębie aplikacji i w obrębie klientów
IoC.bind<Main>(Main).toSelf().inSingletonScope; // IoC.bind(Main).to(Main);
IoC.bind(Types.ILogger).to(ConsoleLogger);
IoC.bind(TemperatureSensor).toSelf().inSingletonScope();
IoC.bind<IHttp>(Types.IHttp).to(Http).inTransientScope();
IoC.bind<WeatherApi>(WeatherApi).toSelf().inTransientScope();