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

router.post('/userscreate', (req, res) => createUserUseCasesControllerRoutes.execute(req, res))

router.post('/usersdelete', (req, res) => deletedUserUseCasesControllerRoutes.executeDelete(req, res))

router.put('/userupdate', (req, res) => updatedUserUseCasesControllerRoutes.executeUpdate(req, res))

export { router } 