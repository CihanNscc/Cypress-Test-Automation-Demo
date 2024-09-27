import PenCard from "@/components/pen-card";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-sm text-center space-y-10">
        <h1 className="text-2xl font-bold text-zinc-100">
          Cypress Demo Pen Shop
        </h1>
        <PenCard />
        <p className="text-sm text-zinc-300">
          This is a basic UI for a Cypress demo.
        </p>
      </div>
    </div>
  );
}
