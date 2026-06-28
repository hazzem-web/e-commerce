import {z} from 'zod'



export const addUserSchema = {
   body: z.strictObject({
        name: z.string().trim(),
        email: z.email().trim(),
        password:z.string().min(6).max(20)
    })

}
