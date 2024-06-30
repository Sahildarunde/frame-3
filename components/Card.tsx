
type CardProps = {
    title: String,
    numbers: String,
    percentage: String,
    svg: String
}

export default function Card({title, numbers, percentage, svg}: CardProps){
    return (
        <div className="bg-white px-4 py-2 rounded-lg text-black flex flex-col  gap-2 pl-8 py-10">
            <div className="flex items-center gap-2 ">
                <img className='h-7 p-1 bg-yellow-500 rounded-full' src={`./${svg}.svg`} alt="" />
                <h4 className="text-black text-xl">Customers</h4>
            </div>
            <h1 className="text-3xl">{numbers}</h1>
            <div className="text-green-600 flex items-center gap-1">
                <Arrow />
                <h4>{percentage}%</h4>
            </div>


        </div>
    );
}

function Arrow(){
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
    <path fill-rule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z" clip-rule="evenodd" />
  </svg>
  
}
