import { z } from "zod";

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

const RegisterSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
});

type RegisterSchemaType = z.infer<typeof RegisterSchema>
type LoginSchemaType = z.infer<typeof LoginSchema>


export {
    LoginSchema,
    RegisterSchema
}

export type{
    LoginSchemaType,
    RegisterSchemaType
}
