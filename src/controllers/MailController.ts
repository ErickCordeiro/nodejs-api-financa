import {Request, Response} from 'express';
import { transport } from '../helpers/mail/CreateTransport';


const index = async (req: Request, res: Response) => {
    //Config Message to Send
    let message = {
        from: 'Erick Cordeiro <erickcordeiroa@gmail.com>', //Quem esta mandando
        to: 'teste@gmail.com', //Quem vai receber
        subject: 'Envio de teste com nodejs', //Assunto
        html: 'Opa, <strong>Olá como vai?</strong>', //Mensagem em html
        text: 'Opa, Olá como vai?'//Caso não tenha leitura de html exibirá o texto
    }

    //Send Message

    let info = await transport.sendMail(message);

    res.status(200).json({
        info: info
    });
};

export default {
    index,
}