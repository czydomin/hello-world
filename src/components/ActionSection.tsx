type ActionSectionProps = {
  onAddTask: () => void;
};

export function ActionSection(props: ActionSectionProps) {
  return (
    <div className="flex w-1/3 justify-between">
      <button
        onClick={props.onAddTask}
        className="px-8 py-2 rounded text-white	font-medium bg-emerald-400"
      >
        Add
      </button>
      <select className="bg-slate-300 rounded w-32 p-2 text-gray-700 font-medium">
        <option>All</option>
        <option>Incomplete</option>
        <option>Complete</option>
      </select>
    </div>
  );
}
