import Image from "next/image";

type ItemProps = {
  title: string;
  isDone: boolean;
  dueDate: Date;
};
export function Item(props: ItemProps) {
  return (
    <div className="bg-slate-100 h-10 flex flex-1 justify-between rounded p-4">
      <div className="bg-slate-100 flex items-center gap-4">
        <input
          checked={props.isDone}
          className="h-8 w-8"
          type="checkbox"
        ></input>
        <div>
          <p className="text-xl  ">{props.title}</p>
          <p className="italic">{props.dueDate.toDateString()}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_UA3KQ9qCWryJXnVq2q5gY2eu-UvCXWbwA&usqp=CAU"
            width={30}
            height={30}
            alt="delete icon"
          />
        </button>
        <button>
          <Image
            src="https://www.svgrepo.com/show/61278/edit.svg"
            width={30}
            height={30}
            alt="edit icon"
          />
        </button>
      </div>
    </div>
  );
}
