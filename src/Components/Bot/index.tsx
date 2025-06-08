import Bot from "./Bot";
import User from "./User";

interface IBotResponse {
  user?: string;
  bot: string;
}

const BotResponse: React.FC<IBotResponse> = ({ user, bot }) => {
  return (
    <div className="flex flex-col w-full">
      {/* User */}
      <User
        query={"Whats is the capital of Pakistan"}
      />
      {/* Bot */}
      <Bot
        response={bot}
      />
    </div>
  )
}

export default BotResponse