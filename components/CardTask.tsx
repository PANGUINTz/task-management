import Image from "next/image";
import { Flag, MessageSquare, MoreHorizontal, Paperclip } from "react-feather";

type CardTaskProps = {
  progress: string;
  desc: string;
  createAt: string;
};
const CardTask = ({ progress, desc, createAt }: CardTaskProps) => {
  let colorProgress = "";
  if (progress == "Copywriter") {
    colorProgress = "bg-purple-500/20 text-purple-500";
  } else if (progress == "Illustration") {
    colorProgress = "bg-green-500/20 text-green-500";
  } else {
    colorProgress = "bg-sky-500/20 text-sky-500";
  }
  return (
    <div className="w-full h-fit p-5 bg-white rounded-xl mt-5">
      <div className="flex justify-between items-center">
        <div className={`rounded-full w-fit px-3 text-sm ${colorProgress}`}>
          {progress}
        </div>
        <MoreHorizontal className=" hover:cursor-pointer text-gray-400" />
      </div>
      <p className="text-wrap my-2.5">{desc}</p>
      <div className="w-full flex justify-between items-center gap-5 text-gray-400 text-sm">
        <div className="flex items-center gap-1">
          <Flag className="w-5" />
          {createAt}
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="w-5" />2
        </div>
        <div className="flex items-center gap-1">
          <Paperclip className="w-5" />5
        </div>
        <Image
          src={"/assets/2151134263.jpg"}
          alt="avatar"
          width={1080}
          height={720}
          className="rounded-full aspect-square w-6 h-6"
        />
      </div>
    </div>
  );
};

export default CardTask;
