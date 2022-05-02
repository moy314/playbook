const User = require('./../../app/models/User');

describe("unit test for user Class", () => {

    test('create an user object',()=>{

        const user = new User(1,'moy_314','moises','bio')

        expect(user.id).toBe(1)
        expect(user.username).toBe('moy_314')
        expect(user.name).toBe('moises')
        expect(user.bio).toBe('bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()



    });
})


//-----------------------------------------------------------------------//

describe("unit test for getters", () => {

    test('getters and setters',()=>{

        const user = new User(1,'moy_314','moises','bio')

        expect(user.getUsername()).toBe('moy_314')
        expect(user.getBio()).toBe('bio')
        expect(user.getDateCreated()).not.toBeUndefined()
        expect(user.getLastUpdated()).not.toBeUndefined()

        //expect(user.getLastUpdated()).not.toBeUndefined()



    });
})


describe("pruebas para set",() =>{

    test('add new user', ()=>{

        const user = new User(1,"moycas","moy","bio1");
        user.setUsername = 'moicas';
        expect(user.username).toBe('moicas');

        user.setBio = 'new bio';
        expect(user.bio).toBe('new bio');
    })



})