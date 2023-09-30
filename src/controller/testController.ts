import { Request, Response, Router } from "express";
import BaseController from "../lib/baseController";

export default class TestController extends BaseController {
    router: Router;
    
    constructor() {
        super();
        this.router=Router();
        this.routesApp()
    }

    getasync =async (req: Request, res: Response)=>{
        return res.status(200).json("Hello world!")
    }

    public routesApp(): void {
       this.router.get("/",this.getasync);
    }

}