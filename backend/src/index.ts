import express from "express"

class App {
  public application : express.Application

  constructor() {
    this.application = express();
  }
}

const app = new App().application;
const port = 4000

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello express!");
})

app.listen(port, () => console.log(`start listening at ${port}`));
