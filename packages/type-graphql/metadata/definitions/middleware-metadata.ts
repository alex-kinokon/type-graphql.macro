import { Middleware } from "../../interfaces/Middleware"

export interface MiddlewareMetadata {
  target: Function
  fieldName: string
  middlewares: Array<Middleware<any>>
}
