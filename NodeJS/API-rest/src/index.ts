import express, { Request, Response, NextFunction } from "express";

//express é um gerenciador de rotas. Permite trocar informaçoes sobre o protocolo HTTP
//é uma biblioteca para gerenciar rotas HTTP

//criando um servidor http com espress
const app = express();
app.get("/status", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: "bar" });
});

app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});
