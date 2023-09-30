import { Router } from "express";

export default abstract class BaseController{
    abstract router: Router;
    public abstract routesApp():void;
}