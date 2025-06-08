import { Add, ArrowUpward, MergeType } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import { useState } from "react";

export const InputComp = ({ handleStream }: { handleStream: (query: string) => void }) => {
  const [query, setQuery] = useState("")
  return <>
    <div className="w-full h-auto gap-6 flex justify-between flex-col bg-primary-light_bg border-primary-border border-2 rounded-2xl">
      {/* input */}
      <div className="w-full px-4 py-5">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // Prevent newline
              handleStream(query);
              setQuery("")
            }
          }}
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
          <ButtonBase onClick={() => {
            handleStream(query);
            setQuery("")
          }} className=" border bg-primary-lighter hover:bg-[#e97c58]  transition-all duration-300 border-primary-border rounded-[7px] size-[2.5rem] flex justify-center items-center">
            <ArrowUpward className="text-white" />
          </ButtonBase>
        </div>
      </div>
    </div>
  </>
}