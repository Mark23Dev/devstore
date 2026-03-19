import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="text-xl font-bold tracking-tight">
      <Image src={"/devstore.png"} height={140} width={280} alt="DevStore" />
    </Link>
  );
}