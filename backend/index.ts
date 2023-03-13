export {}
import express, { Express } from "express";
import logger from "./utils/logger";
import middleware from "./utils/middleware";
import appRouter from "./routes/routes";

const app:Express = express();
const PORT:number = 3001


app.listen(PORT, ():void => {
	logger.info("Hello world")
})

app.use(express.json())
app.use(middleware.logRequest)

app.use("/", appRouter)

app.use(middleware.uknownEndpoint)

