import express, {Request, Response} from 'express';
const router = express.Router();

interface Item {
    text: String,
    count: Number
}

router.get('/', function(req: Request, res: Response){
    const itemList: Item[] = [
        {
            text: 'some text',
            count: 4
        },
        {
            text: 'another text',
            count: 7
        }
    ]
    res.send(itemList);
});

export default router;