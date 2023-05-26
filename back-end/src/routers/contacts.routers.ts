import { Router } from "express";


export const contactRouters = Router()

contactRouters.post("")
contactRouters.get("/:id")
contactRouters.patch("/:id")
contactRouters.delete("/:id")