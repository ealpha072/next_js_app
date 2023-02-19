import express, {Request, Response} from 'express'
import next from 'next'

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })

const handle = app.getRequestHandler()
const PORT = 3001

app.prepare()
.then(()=>{
    const server = express()

    server.all('*', (req:Request, res:Response) => {
        return handle(req, res)
    })

    server.listen(PORT, (err?:NodeJS.ErrnoException) => {
        if (err) throw err
        console.log(`Server listening on port ${PORT}`);
    })
})
.catch((e)=>
    {console.error(e);
})