import CardTask from "@/components/CardTask";
import TaskSide from "@/components/TaskSide";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col">
        <div className=" w-full pr-5 py-5 px-10">
          <h1 className="font-bold text-2xl mb-10">Homepage Design</h1>
          <div className="grid md:grid-cols-4 gap-5 font-bold grid-cols-1">
            <div>
              <h5>Task Ready</h5>
              <CardTask
                progress="Copywriter"
                desc="Konsep hero title yang menarik"
                createAt="Nov 24"
              />
              <CardTask
                progress="UI Design"
                desc="membuat Konsep hero title yang menarik untuk haloamna aboust us "
                createAt="Nov 24"
              />
            </div>

            <div>
              <h5>On Progress</h5>
              <CardTask
                progress="Illustration"
                desc="Konsep hero title yang menarik"
                createAt="Nov 24"
              />
              <CardTask
                progress="Copywriter"
                desc="membuat Konsep hero title yang menarik untuk haloamna aboust us "
                createAt="Nov 24"
              />
              <CardTask
                progress="UI Design"
                desc="Konsep hero title yang menarik"
                createAt="Nov 24"
              />
              <CardTask
                progress="Copywriter"
                desc="membuat Konsep hero title yang menarik untuk haloamna aboust us "
                createAt="Nov 24"
              />
            </div>

            <div>
              <h5>Needs Review</h5>
              <CardTask
                progress="Copywriter"
                desc="Konsep hero title yang menarik"
                createAt="Nov 24"
              />
              <CardTask
                progress="Illustration"
                desc="membuat Konsep hero title yang menarik untuk haloamna aboust us "
                createAt="Nov 24"
              />
              <CardTask
                progress="Copywriter"
                desc="Konsep hero title yang menarik"
                createAt="Nov 24"
              />
            </div>

            <div>
              <h5>Done</h5>
              <CardTask
                progress="UI Design"
                desc="Konsep hero title yang menarik"
                createAt="Nov 24"
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/5 w-full py-5 px-10 border-l border-l-gray-300">
          <TaskSide />
        </div>
      </div>
    </div>
  );
}
