import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../models/errors/database.error.model";
import userRepository from "../repositories/user.repository";
//Router permite que criemos configurações de rotas
const usersRoute = Router();

// Operaçoes que faremos
// get /users
// get /users/:uuid
// post /users
// post /users/:uuid
// delete /users/:uuid

/* 
// ---- Sem banco de dados ----
// get /users
usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  //const users = [{ userName: "Filipe" }];
  const users = userRepository.findAllUsers(); //Pegando do banco de dados.

  res.status(StatusCodes.OK).send(users);
});

// get /users/:uuid
//temos duas formas de passar parametros para o protocolo HTTP: por query string ou por query params
usersRoute.get("/users/:uuid", (req: Request, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;

  res.status(StatusCodes.OK).send({uuid});
});

// post /users
usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  
  console.log(req.body);

  res.status(StatusCodes.CREATED).send(newUser);
});

//put - alterar usuario
usersRoute.put("/users/:uuid", (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;

  modifiedUser.uuid = uuid;
  res.status(StatusCodes.OK).send(modifiedUser);
});

// delete /users/:uuid
usersRoute.delete("/users/:uuid", (req: Request, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;

  res.sendStatus(StatusCodes.OK);
}); */


/* ---- Utilizando o bando de dados ---- */
// get /users
usersRoute.get("/users", async (req: Request, res: Response, next: NextFunction) => {
  const users = await userRepository.findAllUsers(); //Pegando do banco de dados.
  //console.log(req.headers['authorization']);
  //console.log(users);
  res.status(StatusCodes.OK).send(users);
});

// get /users/:uuid
usersRoute.get("/users/:uuid", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const uuid = req.params.uuid;
    const users = await userRepository.findById(uuid); //Pegando do banco de dados.
  
    res.status(StatusCodes.OK).send(users);
  } catch (error) {
    next(error);
  }
});

// post /users
usersRoute.post("/users", async (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  const uuid = await userRepository.create(newUser);
  
  res.status(StatusCodes.CREATED).send(uuid);
});

//put - alterar usuario
usersRoute.put("/users/:uuid", async (req: Request, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;

  modifiedUser.uuid = uuid;

  await userRepository.update(modifiedUser);
  res.status(StatusCodes.OK).send(modifiedUser);
});

// delete /users/:uuid
usersRoute.delete("/users/:uuid", async (req: Request, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  await userRepository.remove(uuid);

  res.sendStatus(StatusCodes.OK);
});

export default usersRoute;
