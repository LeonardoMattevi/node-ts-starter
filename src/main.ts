import express, { Application, Request, Response, NextFunction} from 'express'

const app: Application = express();

app.get('/', function(req: Request, res: Response, next: NextFunction) {
    res.send("Hello!");
});

app.listen(3000, () => console.log("server start on 3000..."))