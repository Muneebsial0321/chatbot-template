import { Chip } from "@mui/material";
import { BotIcon } from "../../icons/Icons";

export const HomeIntro = () => (<>
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