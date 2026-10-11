import { CircleCheck, Sparkles } from "lucide-react";

function MalaKavachCard({ item }) {
  return (
    <div className="group/item flex items-center gap-3 rounded-2xl border border-[#eadfc9] bg-[#fffaf0] px-4 py-3 transition-all duration-300 hover:border-[#d6a23a]/50 hover:bg-white">
      {/* Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#7f1d1d]/10 text-[#8f6518] transition-colors duration-300 group-hover/item:bg-[#d6a23a]/15">
        <Sparkles className="h-4 w-4" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-[#4a1111]">
          {item.name}
        </h4>

        <p className="mt-0.5 text-xs text-[#806f60]">{item.type}</p>
      </div>

      {/* Service indicator */}
      {item.serviceCharge && (
        <div
          className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-[#8a6215]"
          title="सेवा शुल्क"
        >
          <CircleCheck className="h-4 w-4" />
          <span className="hidden sm:inline">सेवा शुल्क</span>
        </div>
      )}
    </div>
  );
}

export default MalaKavachCard;