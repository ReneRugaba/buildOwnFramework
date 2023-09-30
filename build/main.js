"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testController_1 = __importDefault(require("./controller/testController"));
const server_1 = __importDefault(require("./lib/server"));
let app = new server_1.default();
app.configPortApp(9000);
app.setUpRouterController([
    testController_1.default
]);
app.startServerApp();
//# sourceMappingURL=main.js.map