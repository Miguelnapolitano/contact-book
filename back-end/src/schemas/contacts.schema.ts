import { z } from "zod";
import { requestSchema } from "./clients.schemas";

export const contactReturnSchema = requestSchema.extend({
    id: z.number(),
    client_id: z.number()
})