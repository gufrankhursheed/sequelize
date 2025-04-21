import { Router } from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controller/user.controller.js";

const router = Router()

router.route("/").post(createUser)
router.route("/").get(getAllUser)
router.route("/:id").get(getUser)
router.route("/:id").put(updateUser)
router.route("/:id").delete(deleteUser)

export default router