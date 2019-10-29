import React from "react";
import "./index.less";
import { useUserStore } from "../../../common/store";

export default function HomeLeft() {
  const user = useUserStore();

  return (
    <div className="home-left border-right ">
      <div className="mb-3">
        <img className="mr-1" src={`${user.avatar_url}&s=20`} alt="" />
        {user.login}
      </div>
      <div className="repository">
        <h2 className="f5 flex-justify-between">
          Repositories
          <button className="btn btn-primary">New</button>
        </h2>
        <input className="mt-2 mb-3" type="text" name="" id="" placeholder="find a repository..." />
        <ul>
          <li>
            <a className="f5 text-bold" href="">
              lingziyb/2
            </a>
          </li>
          <li>
            <a className="f5 text-bold" href="">
              lingziyb/react-masonry
            </a>
          </li>
        </ul>
      </div>

      <div className="team mt-3">
        <h2 className="f5 flex-justify-between border-top mb-1 pt-3">Your reams</h2>
        <input className="mt-1 mb-3" type="text" name="" id="" placeholder="find a team..." />
        <ul>
          <li>
            <a className="f5 text-bold truncate" href="">
              FreeCodeCamp-Chengdu/web-dev
            </a>
          </li>
          <li>
            <a className="f5 text-bold truncate" href="">
              FreeCodeCamp-Chengdu/web-dev
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
