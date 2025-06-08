import z from "zod"
const ConversationSchema = z.object({
    title: z.string().optional(),
    userId: z.number().optional(),
    conversationId: z.number().optional(),
    query: z.string(),
    botResponse: z.string().optional()
})

type ConversationSchemaType = z.infer<typeof ConversationSchema>

export { ConversationSchema }
export type { ConversationSchemaType }