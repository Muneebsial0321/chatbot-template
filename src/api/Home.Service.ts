import type { ConversationSchemaType } from "../Schemas/Conversations.schema";
import api from "./axios.config";

export const postConversation = async (payload: ConversationSchemaType) => {
    const { data } = await api.post("/conversations", payload);
    return data
}

export const getConversationById = async (conversationId: number) => {
    if (!conversationId) {
        throw new Error("Conversation ID is required");
    }
    const { data } = await api.get(`/conversations/s/${conversationId}`);
    console.log({getConversationById:data});
    
    return data
}

export const getConversations = async () => {
    const { data } = await api.get(`/conversations/user`);
    return data
}