import PenCard from "@/components/pen-card";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-sm text-center space-y-10">
        <h1 className="text-3xl font-bold">Pen Shop</h1>
        <PenCard />
        <p className="text-sm text-gray-500">
          This is a basic UI for a Cypress demo.
        </p>
      </div>
    </div>
  );
}
