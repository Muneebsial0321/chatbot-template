import type { z, ZodObject, ZodRawShape } from "zod"
import { useSnackbar } from "../Context/Snackbar"
import type { AlertColor } from "@mui/material"

/**
 * Executes a post function only if the provided payload passes Zod schema validation.
 *
 * @template T - The shape of the Zod object schema.
 * @param payload - The data to validate.
 * @param zodSchema - A ZodObject schema used to validate the payload.
 * @param PostFunction - The function to call if validation succeeds. Receives the parsed data.
 * @returns A promise that resolves to `true` if the payload was valid and the post function was called, otherwise `false`.
 */
const ExecuteIfValid = async  <T extends ZodRawShape>(
    payload: unknown,
    zodSchema: ZodObject<T>,
    PostFunction: (payload: z.infer<ZodObject<T>>) => Promise<unknown>): Promise<{ data: any, success: boolean }> => {
    const result = zodSchema.safeParse(payload)
    if (result.success) {
        const data = await PostFunction(result.data)
        if (data.error) {
            return { data, success: false }
        }
        return { data, success: true }
    }
    return { data: null, success: false }

}

/**
 * A custom React hook that returns a reusable form submit handler with validation and user feedback.
 * 
 * It validates the payload using a Zod schema, posts the data if valid, and shows a snackbar message for success or error.
 *
 * @returns An object containing the `handleSubmit` function.
 *
 * @example
 * ```ts
 * // Login.ts
 * import { useHandleSubmitProxy } from './path/to/handlers';
 * import { LoginSchema, LoginSchemaType } from './validations';
 * import { login } from './api';
 *
 * export const useLogin = () => {
 *   const { handleSubmit } = useHandleSubmitProxy();
 *
 *   const onSubmit = async (payload: LoginSchemaType) => {
 *     await handleSubmit(
 *       payload,
 *       LoginSchema,
 *       login
 *     );
 *   };
 *
 *   return { onSubmit };
 * };
 * ```
 */
export const useHandleSubmitProxy = (
) => {
    const { showSnackbar } = useSnackbar()

    /**
 * Handles form submission with schema validation and user feedback.
 *
 * @template T - The shape of the Zod object schema.
 * @param payload - The data to validate.
 * @param zodSchema - A ZodObject schema to validate the payload.
 * @param PostFunction - Function to call if validation succeeds.
 */
    const handleSubmit = async <T extends ZodRawShape>(
        payload: unknown,
        zodSchema: ZodObject<T>,
        PostFunction: (payload: z.infer<ZodObject<T>>) => Promise<unknown>,
        snackbarMessage: string,
        snackbarSeverity: AlertColor
    ) => {
        const hasPosted = await ExecuteIfValid(payload, zodSchema, PostFunction)
        if (hasPosted.success) {
            showSnackbar(
                snackbarMessage,
                snackbarSeverity)
            return { data: hasPosted.data }
        }
        showSnackbar(
            hasPosted.data.message || "Something went wrong",
            "error"
        )
        return { data: hasPosted.data }
    }
    return { handleSubmit }

}