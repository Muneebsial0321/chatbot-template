
import { login } from "../api/Auth.service"
import { LoginSchema, type LoginSchemaType } from "../Schemas/Auth.schema"
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
export const useRegister = () => { }
export const useGoogleAuth = () => { }
export const useForgetPassword = () => { }
export const useResetPassword = () => { }
export const useIsAuthenticated = () => { }


