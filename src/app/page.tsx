export default function Home() {
  return (
    <main className="flex items-center flex-col">
      <Header />
      <ActionSection />
    </main>
  );
}

function Header() {
  return <p className="text-2xl font-bold my-8 text-purple-700">TODO LIST</p>;
}

function ActionSection() {
  return (
    <div className="flex w-1/3 justify-between">
      <button className="px-8 py-2 rounded text-white	font-medium bg-emerald-400">
        Add
      </button>
      <select className="bg-slate-300 rounded w-32 p-2 text-gray-700 font-medium">
        <option>All</option>
      </select>
    </div>
  );
}
