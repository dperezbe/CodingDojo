const JokeController = require('../controllers/jokesController');


module.exports = app => {
  app.get("/api/jokes/", JokeController.alljokes);
  app.get("/api/jokes/random", JokeController.random);
  app.get("/api/jokes/:id", JokeController.idjokes);
  app.post("/api/jokes/new", JokeController.create);
  app.put("/api/jokes/update/:id", JokeController.update);
  app.delete("/api/jokes/delete/:id", JokeController.delete);
};
