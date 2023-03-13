import logger from "./logger";
import { Request, Response, NextFunction } from "express"

const logRequest = (req:Request, res:Response, next:NextFunction):void => {
	logger.info("Method:", req.method);
	logger.info("Path:", req.path);
	logger.info("Body:", req.body);
	logger.info("-------------");

	next();
}

const uknownEndpoint = (req:Request, res:Response): void => {
	res.status(400).json({ error:"Unknown endpoint" });
}

const middleware = {
	logRequest,
	uknownEndpoint
};

export default middleware;