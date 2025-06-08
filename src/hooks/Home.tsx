import { useQuery } from "@tanstack/react-query"
import { getConversationById, getConversations, postConversation } from "../api/Home.Service"
import { useHandleSubmitProxy } from "../hooks/ExecuteIfValid"
import { ConversationSchema, type ConversationSchemaType } from "../Schemas/Conversations.schema"
import { useParams } from "react-router-dom"

export const useCreateConversation = () => {
    const { handleSubmit } = useHandleSubmitProxy()
    const onSubmit = async (payload: ConversationSchemaType) => {
        await handleSubmit(
            payload,
            ConversationSchema,
            postConversation
        )
    }
    return { onSubmit }
}

export const useGetConversations = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["get-conversations"],
        queryFn: getConversations
    })
    return { data, isLoading }
}

export const useGetConversationById = () => {
    const { conversationId } = useParams()
    const { data, isLoading } = useQuery({
        queryKey: ["get-conversations"],
        queryFn: () => getConversationById(Number(conversationId)!)
    })
    return { data, isLoading }
}

export const useCreateFeedbackOnMessage = () => { }