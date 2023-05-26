import { z } from 'zod'
import { contactReturnSchema } from './contacts.schema'

export const requestSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    phone: z.string().max(15)
})

export const clientReturnSchema = requestSchema.extend({
    id: z.number(),
    contacts: contactReturnSchema.array()
})

