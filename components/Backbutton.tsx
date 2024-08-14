"use client";
import { useRouter } from "next/navigation";
import { IoReturnUpBack } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <IoReturnUpBack className="mb-2 text-3xl" />
    </button>
  );
}
