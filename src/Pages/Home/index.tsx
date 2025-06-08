import BotResponse from "../../Components/Bot"
import { useState } from "react"
import { HomeIntro } from "./HomeIntro"
import { InputComp } from "./InputComp"
import { useCreateConversation, } from "../../hooks/Home";

interface IConversation {
  id?: number;
  title: string;
  query: string;
  botResponse: string;
  isStreaming: boolean
}
const Home = () => {
  const { onSubmit } = useCreateConversation()
  const [conversations, setConversations] = useState<IConversation[]>([]);

  const handleStream = async (query: string) => {

    // initalize empty conversation with user query
    setConversations((prev) => [...prev, {
      query: query,
      botResponse: "",
      title: "",
      isStreaming: true
    }])

    const CURRENT_INDEX = conversations.length
    const eventSource = new EventSource(`http://localhost:5001/stream/json`);
    let streamText = "";

    // Renender each word
    eventSource.onmessage = async (event) => {
      try {

        const data: { token: string, status: "START" | "GENERATING" | "END" } = JSON.parse(event.data)

        if (data.token) {

          streamText = streamText + data.token
          setConversations((prev) => prev.map((e, i) => (
            i == CURRENT_INDEX ? { ...e, botResponse: streamText, query }
              : { ...e }
          )))

        }

        if (data.status === "END") {

          setConversations((prev) => prev.map((e, i) => (
            i == CURRENT_INDEX ? { ...e, isStreaming: false }
              : { ...e }
          )))

          console.log("EventSource Closed Safely");
          // saved the latest conversation
          console.log({
            query: query,
            botResponse: streamText,
          });

          await onSubmit({
            query,
            botResponse: streamText,
            title: query,
          })

          eventSource.close();
        }

      } catch (err) {
        console.error("Failed to parse event data:", err);
      }
    };

    // Finisih Streaming
    eventSource.onerror = (_) => {
      setConversations((prev) => prev.map((e, i) => (
        i == CURRENT_INDEX ? { ...e, isStreaming: false }
          : { ...e }
      )))
      console.log("EventSource Closed");
      eventSource.close();
    };
  }

  // useEffect(() => {
  //   if (id) {
  //     setConversationId(id)
  //     setConversationId(data)
  //   }
  // }, [data, id])

  return (
    <div className="sm:w-[80%] w-[95%] mx-auto h-[100vh] pb-2 overflow-auto flex flex-col justify-center items-center">

      {/* Home */}
      {conversations.length == 0 && <HomeIntro />}

      <div className={`${conversations.length === 0 && "hidden"} h-[90vh] w-full overflow-auto mt-4 no-scrollbar`}>
        {conversations.map((e, i) => (
          <BotResponse
            key={i}
            user={e.query}
            isSteaming={e.isStreaming}
            bot={e.botResponse} />
        ))}
      </div>

      {/* input */}
      <InputComp handleStream={handleStream} />
    </div>
  )
}




export default Home