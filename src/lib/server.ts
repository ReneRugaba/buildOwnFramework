import express, { NextFunction, Request, Response } from 'express';
import BaseController from './baseController';

export default class ServerApp {

    private app: express.Application;

    public configPortApp(port: number = 8080): void {
        this.buildApp();
        this.app.set('port', port);
    };

    private buildApp() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    /**
     * Set controller in application record
     * @param typeControllers 
     */
    public setUpRouterController<T extends BaseController>(typeControllers: { new(): T }[]): void {
        for (const controller of typeControllers) {
            let type = new controller();
            this.app.use(`/${type.constructor.name}`, type.router)
        }
    }

    public startServerApp = () => {
        this.app.listen(this.app.get('port'), () =>
            console.info(`app start on port ${this.app.get('port')}`),
        );
    };
}