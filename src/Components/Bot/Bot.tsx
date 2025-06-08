import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { ButtonBase, IconButton, Tooltip } from '@mui/material'
import { CopyAll, Share, Speaker, ThumbDown, ThumbsUpDown, ThumbUp, VolumeUpRounded } from '@mui/icons-material'
import { BotIcon } from '../../icons/Icons'
const Bot = ({ response }: { response: string }) => (
    <div className='w-full mt-4'>
        <div className='w-full text-xl h-auto pt-2 pb-5 rounded-2xl leading-10 text-white'
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
            >{response}</ReactMarkdown>
        </div>
        <BotFooter />
    </div>
)

const BotFooter = () => (<>
    <div className="w-full h-[5rem] mb-4 flex items-center justify-between ">
        <BotIcon className='text-5xl'/>
        <div className="flex">

            <Tooltip title="Like">
            <ButtonBase className='flex justify-center items-center rounded-[7px] size-[3rem] hover:bg-accent transition-all duration-300'>
                <ThumbUp className='text-primary-light_text'/>
            </ButtonBase>
            </Tooltip>


            <Tooltip title="Dislike">
            <ButtonBase className='flex justify-center items-center rounded-[7px] size-[3rem] hover:bg-accent transition-all duration-300'>
                <ThumbDown className='text-primary-light_text'/>
            </ButtonBase>
            </Tooltip>


            <Tooltip title="Read Aloud">
            <ButtonBase className='flex justify-center items-center rounded-[7px] size-[3rem] hover:bg-accent transition-all duration-300'>
                <VolumeUpRounded className='text-primary-light_text text-3xl'/>
            </ButtonBase>
            </Tooltip>

            <Tooltip title="Copy All">
            <ButtonBase className='flex justify-center items-center rounded-[7px] size-[3rem] hover:bg-accent transition-all duration-300'>
                <CopyAll className='text-primary-light_text'/>
            </ButtonBase>
            </Tooltip>
            
            <Tooltip title="Share Chat">
            <ButtonBase className='flex justify-center items-center rounded-[7px] size-[3rem] hover:bg-accent transition-all duration-300'>
                <Share className='text-primary-light_text'/>
            </ButtonBase>
            </Tooltip>
        </div>
    </div>
</>
)

export default Bot