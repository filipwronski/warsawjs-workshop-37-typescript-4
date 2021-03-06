import 'reflect-metadata'


import { Mock, It } from 'moq.ts'
import TemperatureSensor from '../TemperatureSensor';
import { WeatherApi } from '../WeatherApi';
describe('TemperatureSensor tests', () => {
   it('should convert Celcius to Fahrenheit', async () => {
       const weatherApiMock = new Mock<WeatherApi>();
       weatherApiMock.setup(m => m.getTemperature()).returns(5);
       const unitUnderTest: TemperatureSensor = new TemperatureSensor(weatherApiMock.object());
       
       let result: number = await unitUnderTest.getTemperature();
       
       expect(result).toBe(8.5);
   })
})