export default function TopBookItem({author, title, image}) {
  return <div className="flex flex-row gap-2.5 pr-4">
    <div>
      <img className="w-13.5 h-20 rounded-lg" src={image} alt="image"/>
    </div>
    <div className="flex flex-col justify-between pb-4.5">
      <h2 className='text-[14px] text-[#FCFCFC] line-clamp-2'>{title}</h2>
      <p className="text-[rgba(240,240,240,72%)] text-[13px]">{author}</p>
    </div>
  </div>
}