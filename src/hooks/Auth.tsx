
import { login, register } from "../api/Auth.service"
import { LoginSchema, RegisterSchema, type LoginSchemaType, type RegisterSchemaType } from "../Schemas/Auth.schema"
import { useHandleSubmitProxy } from "./ExecuteIfValid"

export const useLogin = () => {
    const { handleSubmit } = useHandleSubmitProxy()
    const onSubmit = async (payload: LoginSchemaType) => {
        await handleSubmit(
            payload,
            LoginSchema,
            login
        )
    }
    return { onSubmit }

}
export const useRegister = () => {
    const { handleSubmit } = useHandleSubmitProxy()
    const onSubmit = async (payload: RegisterSchemaType) => {
        await handleSubmit(
            payload,
            RegisterSchema,
            register
        )
    }
    return { onSubmit }

}
export const useGoogleAuth = () => { }
export const useForgetPassword = () => { }
export const useResetPassword = () => { }
export const useIsAuthenticated = () => { }


