import dotenv from "dotenv"
dotenv.config({ path: "./.env" })

const PORT:number = parseInt(process.env.PORT || "5000", 10);
const URL:string = process.env.MONGO_URL

const envCredentials = { PORT, URL }
export default envCredentials