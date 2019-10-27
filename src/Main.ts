import { injectable, inject } from 'inversify';

@injectable()
export class Main
{
    constructor()
    { }

    public async Start(): Promise<void>
    {
        console.log('start');
    }
}
