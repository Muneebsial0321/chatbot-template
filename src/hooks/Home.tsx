import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getConversationById, getConversations, postConversation } from "../api/Home.Service"
import { useHandleSubmitProxy } from "../hooks/ExecuteIfValid"
import { ConversationSchema, type ConversationSchemaType } from "../Schemas/Conversations.schema"
import { useParams, useSearchParams } from "react-router-dom"
import type { ConversationById } from "../Types/ConversationById.type"

export const useCreateConversation = () => {
    const queryClient = useQueryClient()
    const { handleSubmit } = useHandleSubmitProxy()
    const onSubmit = async (payload: ConversationSchemaType) => {
        const { data } = await handleSubmit(
            payload,
            ConversationSchema,
            postConversation,
            "Conversation was created Successfully",
            "success"
        )
        queryClient.invalidateQueries({
            queryKey: ["get-conversations"],
        })
        return data
    }
    return { onSubmit }
}

export const useGetConversations = () => {
    const { data, isLoading } = useQuery<Array<{ id: number, title: string }>>({
        queryKey: ["get-conversations"],
        queryFn: getConversations
    })
    return { data, isLoading }
}

export const useGetConversationById = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    const { data, isLoading } = useQuery<ConversationById>({
        queryKey: ["get-conversations", id],
        queryFn: () => getConversationById(Number(id)!)
    })
    if (!id) return { data: null, isLoading: false }
    return { data, isLoading }
}

export const useCreateFeedbackOnMessage = () => { }