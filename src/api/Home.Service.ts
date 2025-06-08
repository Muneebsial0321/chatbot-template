import type { ConversationSchemaType } from "../Schemas/Conversations.schema";
import api from "./axios.config";

export const postConversation = async (payload: ConversationSchemaType) => {
    const { data } = await api.post("/conversations", payload);
    return data
}

export const getConversationById = async (conversationId: number) => {
    const { data } = await api.get(`/conversations/${conversationId}`);
    return data
}

export const getConversations = async () => {
    const { data } = await api.get(`/conversations/user`);
    return data
}