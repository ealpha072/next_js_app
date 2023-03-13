export {}
import envCredentials from "./utils/config";
import express, { Express } from "express";
import mongoose from "mongoose";
import logger from "./utils/logger";
import middleware from "./utils/middleware";
import appRouter from "./routes/routes";

const app:Express = express();
const PORT:number = envCredentials.PORT
const URL:string = envCredentials.URL

logger.info(`Attempting connection to database...`)

mongoose.set("strictQuery", true);
mongoose
	.connect(URL)
	.then(():void => {
		logger.info(`Connected to database`);

		app.listen(PORT, ():void => {
			logger.info(`Server listening on port, ${PORT}`)
		})
	})
	.catch((error:Error):void => {
		logger.error(error.message)
	})


app.use(express.json())
app.use(middleware.logRequest)

app.use("/", appRouter)

app.use(middleware.uknownEndpoint)

