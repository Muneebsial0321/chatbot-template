import type { ZodObject, ZodRawShape } from "zod"
import { useSnackbar } from "../Context/Snackbar"


export const ExecuteIfValid = async  <T extends ZodRawShape>(
    payload: unknown,
    zodSchema: ZodObject<T>,
    PostFunction: (payload: ReturnType<typeof zodSchema.parse>) => Promise<unknown>): Promise<boolean> => {
    const result = zodSchema.safeParse(payload)
    if (result.success) {
        await PostFunction(result.data)
        return true
    }
    return false
}

export const useHandleSubmitProxy = (
) => {
    const { showSnackbar } = useSnackbar()
    const handleSubmit = async <T extends ZodRawShape>(
        payload: unknown,
        zodSchema: ZodObject<T>,
        PostFunction: (payload: ReturnType<typeof zodSchema.parse>) => Promise<unknown>
    ) => {
        const hasPosted = await ExecuteIfValid(payload, zodSchema, PostFunction)
        if (hasPosted) return showSnackbar("Success", "success")
        return showSnackbar("Error", "error")
    }
    return { handleSubmit }

}