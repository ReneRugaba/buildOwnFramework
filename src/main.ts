import TestController from "./controller/testController"
import ServerApp from "./lib/server"

let app= new ServerApp()
app.configPortApp(9000)
app.setUpRouterController(
    [
        TestController
    ]
    )
app.startServerApp()