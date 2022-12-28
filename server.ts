import express, {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

//Import routes
import Routers from './src/routers';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/api', Routers);

app.use((req: Request, res:Response) => {
    res.status(404);
    res.json({
        error: true, 
        message: 'Endpoint não encontrado, por favor verifique a rota'
    });
})

app.listen(process.env.PORT);