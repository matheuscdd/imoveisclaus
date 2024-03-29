import { Router } from "express";
import middleware from "../middleware";
import schemas from "../schemas";
import controllers from "../controllers";

export const user: Router = Router();

user.post("", 
    middleware.dataValid(schemas.user.create), 
    middleware.emailValid, 
    controllers.user.create
);

user.get("", 
    middleware.tokenValid, 
    middleware.userTokenValid,
    middleware.adminValid, 
    controllers.user.read
);

user.patch("/:id", 
    middleware.dataValid(schemas.user.update, ["name", "email", "password"]), 
    middleware.idValidUser, 
    middleware.tokenValid, 
    middleware.userTokenValid,
    middleware.emailValid, 
    controllers.user.update
);

user.delete("/:id", 
    middleware.idValidUser, 
    middleware.tokenValid, 
    middleware.userTokenValid,
    middleware.adminValid, 
    controllers.user.remove
);



