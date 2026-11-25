export default function NewsItem({title}) {
    return <div className="flex flex-col justify-between w-81.5 h-62.75 bg-[#1A1D1F] rounded-lg p-3">
        <img className="w-full h-28.25 object-cover rounded-t" src="/image.png" alt="image"/>
        <p className="text-[rgba(247,249,250,0.4)] text-[14px]">Sentabr 7, 2022</p>
        <h2 className="line-clamp-2 font-[Inter,system-ui] font-semibold text-[14px] text-white">
            {title}
        </h2>
        <p className="line-clamp-2 text-[#888888] font-[Inter,system-ui] text-[14px] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci harum laudantium
            porro
            provident repudiandae tenetur? Aperiam ducimus eaque, esse minima odit voluptatem!
        </p>
    </div>
}
