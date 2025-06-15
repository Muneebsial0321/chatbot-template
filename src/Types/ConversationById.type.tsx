type chat = {
    id: number;
    query: string;
    botResponse: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    userId: number;
    conversationId: number;
};

export type ConversationById = {
    id: number;
    title: string;
    userId: number;
    createdAt: string;
    updatedAt: string;
    chats: chat[];
};

