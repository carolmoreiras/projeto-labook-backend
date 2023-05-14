import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { SignupSchema } from "../dto/signup.dto";
import { catchError } from "../error/catchError";

export class UserController {
  constructor(
    private userBusiness: UserBusiness
  ) { }

  public signup = async (req: Request, res: Response) => {
    try {
      const input = SignupSchema.parse({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })

      const output = await this.userBusiness.signup(input)

      res.status(201).send(output)
    } catch (error) {
      catchError(res, error)
    }
  }
}