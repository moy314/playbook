const Spiderman = require('./../app/spiderman')

describe("Test Suite spierman Description", () => {
    test('create an spiderman object', () => {
      const andreGarfield = new Spiderman("spiderman sony",37,"andrew garfield",2,"sony")
      expect(andreGarfield.nombre).toBe("spiderman sony");
      expect(andreGarfield.edad).toBe(37);
      expect(andreGarfield.actor).toBe("andrew garfield");
      expect(andreGarfield.numPeliculas).toBe(2);
      expect(andreGarfield.estudioCine).toBe("sony");

    });
  })


  describe("2)Test Suite spiderman info", () => {
    test('releases spiderman info', () => {
      const tomHolland = new Spiderman("spiderman marver",26,"tom holland",4,"marvel studios")
      expect(tomHolland.getInfo()).toBe("hey i'm tom holland from marvel studios");
      

    });
  })