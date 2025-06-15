import type { LoginSchemaType, RegisterSchemaType } from "../Schemas/Auth.schema"
import api from "./axios.config"

export const login = async (payload: LoginSchemaType) => {
    const { data } = await api.post("/auth/login", payload);
    return data
}

export const register = async (payload: RegisterSchemaType) => {
    const { data } = await api.post("/auth/register", payload);
    console.log({dfbdfbkdjnfkdjnfkdnf :data});
    
    return data
}
export const useGoogleAuth = () => { }
export const useForgetPassword = () => { }
export const useResetPassword = () => { }
export const useIsAuthenticated = () => { }