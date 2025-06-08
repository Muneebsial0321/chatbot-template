const User = ({ query }: { query: string }) => {
    return (
        <div className='w-full flex justify-end'>
        <div className='max-w-3/5 text-xl  bg-accent h-auto px-4 pt-2 pb-5 rounded-2xl text-white'
        >
        {query}
        </div>
        </div>
    )
}

export default User