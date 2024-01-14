"use client";
import { ArrowBackProps } from "../../../types/types";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function ArrowBack({ iSize }: ArrowBackProps) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="my-3">
      <button onClick={goBack} type="button">
        <IoMdArrowBack size={iSize} />
      </button>
    </div>
  );
}
