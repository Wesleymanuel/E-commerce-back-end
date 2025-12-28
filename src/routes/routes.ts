import { Router } from "express";
import { createUserRepository } from "../repository/createUserRepository.js";
import { createUserUseCases } from "../useCases/createUser/createUserUseCases.js";
import { createUserUseCasesController } from "../useCases/createUser/crateUserUseCasesController.js";
import { deleteUserRepository } from "../repository/deleteUserRepository.js";
import { deleteUserUseCases } from "../useCases/deleteUser/deleteUserUseCases.js";
import { deleteUserUseCasesController } from "../useCases/deleteUser/deleteUserUseCasesController.js";
import { updateUserRepository } from "../repository/upadateUserRepository.js";
import { updateUserUseCases } from "../useCases/updateUser/updateUserUseCases.js";
import { updateUserUseCasesController } from "../useCases/updateUser/updateUserController.js";
import { loginUserRepository } from "../repository/loginUserRepository.js";
import { LoginUserUseCases } from "../useCases/loginUser/loginUserUseCases.js";
import { LoginUserController } from "../useCases/loginUser/loginUserController.js";
import { buyProductRepository } from "../repository/buyProductRepository.js";
import { buyProductUseCases } from "../useCases/buyProuct/buyProuctUseCases.js";
import { buyProductUseCasesController } from "../useCases/buyProuct/buyProductUseCasesController.js";


const router = Router()

const createUserRepositoryRotes = new createUserRepository()
const createUserUseCasesRoutes = new createUserUseCases(createUserRepositoryRotes)
const createUserUseCasesControllerRoutes = new createUserUseCasesController(createUserUseCasesRoutes)

const deletedUserRepositoryRotes = new deleteUserRepository()
const deletedUserUseCasesRoutes = new deleteUserUseCases(deletedUserRepositoryRotes)
const deletedUserUseCasesControllerRoutes = new deleteUserUseCasesController(deletedUserUseCasesRoutes)

const updatedUserRepositoryRotes = new updateUserRepository()
const updatedUserUseCasesRoutes = new updateUserUseCases(updatedUserRepositoryRotes)
const updatedUserUseCasesControllerRoutes = new updateUserUseCasesController(updatedUserUseCasesRoutes)

const loginUserRepositoryRoutes = new loginUserRepository()
const loginUserUseCasesRoutes = new LoginUserUseCases(loginUserRepositoryRoutes)
const loginUserController = new LoginUserController(loginUserUseCasesRoutes)

const buyProductRepositoryController = new buyProductRepository()
const buyProductUseCasesControllerCont = new buyProductUseCases(buyProductRepositoryController)
const buyProductController = new buyProductUseCasesController(buyProductUseCasesControllerCont)

router.post('/userscreate', (req, res) => createUserUseCasesControllerRoutes.execute(req, res))

router.post('/usersdelete', (req, res) => deletedUserUseCasesControllerRoutes.executeDelete(req, res))

router.put('/userupdate', (req, res) => updatedUserUseCasesControllerRoutes.executeUpdate(req, res))

router.post('/login' ,(req , res) => loginUserController.loginUser(req , res))

router.post('/buy', (req , res) => buyProductController.handle(req , res))

export { router } 