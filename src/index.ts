// nanoid v5 is pure ESM
import { nanoid } from "nanoid"

export const generateId = () => {
  return nanoid(10)
}