
import { login, register } from "../api/Auth.service"
import { LoginSchema, RegisterSchema, type LoginSchemaType, type RegisterSchemaType } from "../Schemas/Auth.schema"
import { useHandleSubmitProxy } from "./ExecuteIfValid"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const navigate = useNavigate()
    const { handleSubmit } = useHandleSubmitProxy()
    const onSubmit = async (payload: LoginSchemaType) => {
        const { data } = await handleSubmit(
            payload,
            LoginSchema,
            login,
            "Logged in",
            "success"

        )
        if(data.token){
            localStorage.setItem("user_token",data.token)
            navigate("/")
        }
    }
    return { onSubmit }

}
export const useRegister = () => {
    const { handleSubmit } = useHandleSubmitProxy()
    const onSubmit = async (payload: RegisterSchemaType) => {
        console.log("datasfdsnfj bndsjf j==============================")

        const { data } = await handleSubmit(
            payload,
            RegisterSchema,
            register,
            "Registered",
            "success"
        )
        console.log({ "datasfdsnfj bndsjf j": data })
    }
    return { onSubmit }

}
export const useGoogleAuth = () => { }
export const useForgetPassword = () => { }
export const useResetPassword = () => { }
export const useIsAuthenticated = () => { }


