import { ButtonBase, Chip } from "@mui/material"
import { BotIcon } from "../../icons/Icons"
import { Add, ArrowUpward, MergeType } from "@mui/icons-material"
import BotResponse from "../../Components/Bot"
import { useState } from "react"

const Home = () => {
  const [text, setText] = useState<string>("");

  const handleStream = async () => {
    console.log("Stream Fired");

    const eventSource = new EventSource(`http://localhost:5000/stream/json`);
    eventSource.onmessage = (event) => {
      try {
        const data: { token: string } = JSON.parse(event.data)
        setText((prevtext) => prevtext + `${data.token}`)
      } catch (err) {
        console.error("Failed to parse event data:", err);
      }
    };

    eventSource.onerror = (_) => {
      console.log("EventSource Closed");
      eventSource.close(); 
    };
  }

  return (
    <div className="sm:w-[80%] w-[95%] mx-auto h-[100vh] pb-2 overflow-auto flex flex-col justify-center items-center">
      {/* tag */}
      {/* <HomeIntro /> */}
      <div className="h-[90vh] w-full overflow-auto mt-4 no-scrollbar">
         <BotResponse bot={text}/> 
      </div>
      {/* input */}
      <InputComp handleStream={handleStream} />
    </div>
  )
}

const InputComp = ({ handleStream }: { handleStream: () => void }) => (<>
  <div className="w-full h-auto gap-6 flex justify-between flex-col bg-primary-light_bg border-primary-border border-2 rounded-2xl">
    {/* input */}
    <div className="w-full px-4 py-5">
      <textarea
        onInput={(e) => {
          e.target.style!.height = 'auto'
          e.target.style!.height = `${e.target.scrollHeight}px`
        }}
        className="w-full no-scrollbar px-1 font-inter text-xl text-white placeholder:text-primary-light_text border-none focus:outline-none focus:ring-0 resize-none overflow-y-auto max-h-[25rem]"
        rows={1}
        placeholder="How can I help you today?"
      />
    </div>
    {/* tools */}
    <div className="w-full h-[3rem] pb-4  flex justify-between px-4">

      {/* left icons */}
      <div className="flex gap-2">
        <div className=" border hover:bg-primary-darker transition-all duration-300 border-primary-border rounded-[7px] size-[2.5rem] flex justify-center items-center">
          <Add className="text-primary-light_text" />
        </div>
        <div className=" border hover:bg-primary-darker transition-all duration-300 border-primary-border rounded-[7px] size-[2.5rem] flex justify-center items-center">
          <MergeType className="text-primary-light_text" />
        </div>
      </div>

      <div className="flex gap-2">
        <ButtonBase className=" border hover:bg-primary-darker transition-all duration-300 border-primary-border rounded-[7px] size-[2.5rem] flex justify-center items-center">
          <Add className="text-primary-light_text" />
        </ButtonBase>
        <ButtonBase onClick={handleStream} className=" border bg-primary-lighter hover:bg-[#e97c58]  transition-all duration-300 border-primary-border rounded-[7px] size-[2.5rem] flex justify-center items-center">
          <ArrowUpward className="text-white" />
        </ButtonBase>
      </div>
    </div>
  </div>
</>)

const HomeIntro = () => (<>
  <div className="flex flex-col">

    <Chip
      onClick={() => null}
      label="Alpha.0"
    />
    {/* hello */}
    <div className="px-8 py-6 text-center min-w-[300px] mb-10">
      <div className="flex items-center gap-4">
        <BotIcon className="text-6xl" />
        <h2 className="text-[60px] mb-2 font-dyslexic text-primary-light_text">
          Muneeb<span className="text-primary">.</span>Returns!
        </h2>
      </div>
    </div>
  </div>
</>)

export default Home