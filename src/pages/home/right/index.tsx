import React from "react";
import "./index.less";
import Popover from "../../../components/popover";

export default function HomeRight() {
  return (
    <div className="home-right">
      <div>Explore repositories</div>
      <Popover content="出显示在左边哟，你还记得吗?" trigger="click">
        <button className="btn btn-primary">点我</button>
      </Popover>
    </div>
  );
}
