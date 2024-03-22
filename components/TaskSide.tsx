import React from "react";

const TaskSide = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold">Task Progress</h1>

      <div className="my-10">
        <div className="flex justify-between text-sm">
          <p>Copywriter</p>
          <p>4/8</p>
        </div>
        <div className="w-full bg-purple-200 rounded-full h-1.5 mb-4">
          <div className="bg-purple-500 h-1.5 rounded-full w-1/2"></div>
        </div>
      </div>

      <div className="my-10">
        <div className="flex justify-between text-sm">
          <p>Illustration</p>
          <p>8/10</p>
        </div>
        <div className="w-full bg-green-200 rounded-full h-1.5 mb-4">
          <div className="bg-green-500 h-1.5 rounded-full w-4/5"></div>
        </div>
      </div>

      <div className="my-10">
        <div className="flex justify-between text-sm">
          <p>UI Design</p>
          <p>2/11</p>
        </div>
        <div className="w-full bg-sky-200 rounded-full h-1.5 mb-4">
          <div className="bg-sky-500 h-1.5 rounded-full w-1/5"></div>
        </div>
      </div>
    </div>
  );
};

export default TaskSide;
