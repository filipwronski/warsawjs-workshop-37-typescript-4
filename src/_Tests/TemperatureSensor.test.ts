import TemperatureSensor, { IHttp } from "../TemperatureSensor";

class HttpMock implements IHttp {
    public get() {
        return 5;
    }
}

describe(TemperatureSensor.name, () => {
    it('should convert temperature', () => {
        const httpMock = new HttpMock()

        const systemUnderTest = new TemperatureSensor(httpMock);

        const result = systemUnderTest.getTemperature();

        expect(result).toBe(8.5);
    })
})