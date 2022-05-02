const UserService = require('./../../app/services/UserService');

describe('test for userService',() => {

    test('create a new user using userService',()=>{

        const user = new UserService.create(1,"moy314","moy")
        expect(user.username).toBe('moy314');
        expect(user.name).toBe('moy');
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();




    })


})