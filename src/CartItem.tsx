type Item = {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  image: string;
  count: number;
};

type Props = {
  item: Item;
  onPlus: () => void;
  onMinus: () => void;
};

function format(num: number) {
  return num.toLocaleString("ru-RU", { minimumFractionDigits: 2 }).replace(",", ".");
}

export default function CartItem({ item, onPlus, onMinus }: Props) {
  return (
    <div className="relative flex items-center gap-2.5 p-4 bg-[#1F2326] border border-[#272B30] rounded-lg">
      <button
        className="absolute -top-2.5 -right-2 w-6 h-6 rounded-full bg-[#1A1D1F] border border-[#272B30] flex items-center justify-center text-[14px] cursor-pointer"
      >
        ✕
      </button>

      <img src={item.image} alt="" className="w-30 h-30 shrink-0 rounded-md object-cover" />

      <div className="flex-1 min-w-0 self-stretch flex flex-col justify-between py-1">
        <h3 className="text-[17px] font-semibold leading-5.5 max-w-108">{item.title}</h3>
        <div>
          <p className="text-[#83BF4F] text-[19px] font-semibold">{format(item.price)} uzs</p>
          <p className="text-[#9DA1A3] text-[13px] line-through decoration-[#FF6A55]">
            {format(item.oldPrice)} uzs
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 self-end mb-1 shrink-0">
        <button
          onClick={onMinus}
          className={`w-8.5 h-8 rounded-md text-[20px] cursor-pointer ${
            item.count > 1 ? "bg-[#E03131]" : "bg-[#33383F] text-[#9DA1A3]"
          }`}
        >
          −
        </button>
        <div className="w-18 h-8 rounded-md bg-[#1A1D1F] border border-[#33383F] flex items-center justify-center text-[14px]">
          {item.count}
        </div>
        <button onClick={onPlus} className="w-8 h-8 rounded-md bg-[#83BF4F] text-[20px] cursor-pointer">
          +
        </button>
      </div>
    </div>
  );
}
