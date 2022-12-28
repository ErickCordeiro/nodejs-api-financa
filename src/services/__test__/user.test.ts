import { UserService } from "../UserService";

//Execute test for group UserService
describe("UserService", () => {
    it('List all Users', async () => {
        const resTest = await UserService.all();
        expect(resTest).not.toBeInstanceOf(Error);
    });
});

