"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackText = ({ children }) => {
  const router = useRouter();

  const handleBack = () => {
    setTimeout(() => {
      router.back();
    }, 200);
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-orange-600 mb-6 font-medium cursor-pointer"
    >
      <ArrowLeft size={20} />
      <span className="font-semibold">{children}</span>
    </button>
  );
};

export default BackText;
