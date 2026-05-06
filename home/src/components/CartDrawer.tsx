import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, count } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[199] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-[200] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-200">
          <h2 className="font-cinzel text-xl font-normal tracking-wide flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Order
            {count > 0 && (
              <span className="bg-orange-400 text-white text-xs font-normal w-5 h-5 rounded-full flex items-center justify-center font-sans">
                {count}
              </span>
            )}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-400 gap-4">
              <ShoppingBag className="w-14 h-14 opacity-20" />
              <p className="font-cinzel text-sm">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-4 py-4 border-b border-zinc-100"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-cinzel text-sm font-normal leading-snug mb-1">
                      {item.title}
                    </h3>
                    <span className="text-orange-400 font-cinzel text-base">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-7 h-7 flex items-center justify-center text-zinc-300 hover:text-red-500 transition-colors ml-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-zinc-200 bg-zinc-50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-cinzel text-sm tracking-wide uppercase text-zinc-500">
                Total
              </span>
              <span className="font-cinzel text-xl text-orange-400">
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-zinc-900 text-white font-cinzel tracking-[1px] py-3 rounded hover:bg-orange-400 transition-colors duration-200">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
