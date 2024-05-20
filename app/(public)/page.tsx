import Image from "next/image";
import {ProductList} from "@/widgets/ProductList";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <ProductList/>
    </div>
  );
}
