import Bot from "./Bot";
import User from "./User";

interface IBotResponse {
  user: string;
  bot: string;
  isSteaming?: boolean
}

const BotResponse: React.FC<IBotResponse> = ({ user, bot, isSteaming = false }) => {
  return (
    <div className="flex flex-col w-full">
      {/* User */}
      <User
        query={user}
      />
      {/* Bot */}
      <Bot
        isStreaming={isSteaming}
        response={bot}
      />
    </div>
  )
}

export default BotResponse