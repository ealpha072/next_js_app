import express, { Request, Response, NextFunction ,Router } from "express"
import User from "../models/users";

const appRouter: Router = express.Router()

appRouter.get("/", (req:Request, res:Response):void => {
	res.send("<h1>Good morning Africa</h1>");
})

export default appRouter