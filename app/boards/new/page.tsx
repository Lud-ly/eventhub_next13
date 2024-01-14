import ArrowBack from "~/src/components/nav/ArrowBack";
import { BoardForm } from "./BoardForm";

export default function NewBoardPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center">
        <ArrowBack iSize={40} />
        <h1 className="text-2xl p-3">Évènement</h1>
      </div>

      <BoardForm />
    </div>
  );
}
