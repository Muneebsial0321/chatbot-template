import type { ConversationSchemaType } from "../Schemas/Conversations.schema";
import api from "./axios.config";

export const postConversation = async (payload: ConversationSchemaType) => {
    const { data } = await api.post("/conversation", payload);
    return data
}

export const getConversationById = async (conversationId: number) => {
    const { data } = await api.get(`/conversation/${conversationId}`);
    return data
}

export const getConversations = async () => {
    const { data } = await api.get(`/conversation/user`);
    return data
}