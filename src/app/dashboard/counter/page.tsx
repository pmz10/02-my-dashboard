import { CartCounter } from "@/app/Shopping-Cart";

export const metadata = {
  title: 'Shopping Cart',
  description: 'Un simple contador'
  }

export default function CounterPage() {



  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en carrito</span>

      <CartCounter value={10} />
    </div>
  );
}