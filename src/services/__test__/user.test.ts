import { UserService } from "../UserService";

//Execute test for group UserService
describe("UserService Test", () => {

    let name:string = 'DevBox Test DDD';
    let email:string = 'devbox@gmail.com';
    let password:string = '123456';

    it('Should create a new user', async() => {
        const user = await UserService.create(name, email, password);
        expect(user).not.toBeInstanceOf(Error); //Verificando se não vai retornar um error
    });

    it('Should not allow to create a user with existing email', async () => {
        const user = await UserService.create(name, email, password);
        expect(user).toBeInstanceOf(Error); //Verificando se não vai retornar um error        
    })

    it('Should list all users', async () => {
        const resTest = await UserService.all();
        expect(resTest).not.toBeInstanceOf(Error);
    });
});

