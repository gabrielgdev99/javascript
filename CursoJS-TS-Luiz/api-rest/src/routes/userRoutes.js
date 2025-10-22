import { Router } from "express";
import userController from "../controllers/UserController";
const router = new Router();

import loginRequired from "../middlewares/loginRequired";

// Não deveria existir
//router.get("/", userController.index); //Lista usuários
//router.get("/:id", userController.show); //Lista usuário

router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
