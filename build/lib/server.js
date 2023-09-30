"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class ServerApp {
    constructor() {
        this.startServerApp = () => {
            this.app.listen(this.app.get('port'), () => console.info(`app start on port ${this.app.get('port')}`));
        };
    }
    configPortApp(port = 8080) {
        this.buildApp();
        this.app.set('port', port);
    }
    ;
    buildApp() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    setUpRouterController(typeControllers) {
        for (const controller of typeControllers) {
            let type = new controller();
            this.app.use(`/${type.constructor.name}`, type.router);
        }
    }
}
exports.default = ServerApp;
//# sourceMappingURL=server.js.map