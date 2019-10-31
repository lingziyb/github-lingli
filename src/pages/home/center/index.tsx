import React, { useCallback, useState, useEffect } from "react";
import "./index.less";
import Popover from "../../../components/popover";

export default function HomeCenter() {
  const [text, setText] = useState("click me");

  useEffect(() => {
    // setInterval(() => {
    //   setText("click " + Date.now());
    // }, 1000);
  }, []);

  return (
    <div className="home-center">
      <h2 className="f4 text-normal">Recent acrivity</h2>
      <div className="box">
        <div className="activity">
          <h6>专注而深入的工作——你成为”十倍”开发者的秘密武器1</h6>
          <p>freeCodeCamp/news-translation · You opened this pull request 12 days ago</p>
        </div>
        <div className="activity">
          <h6>专注而深入的工作——你成为”十倍”开发者的秘密武器2</h6>
          <p>freeCodeCamp/news-translation · You opened this pull request 12 days ago</p>
        </div>
      </div>

      <h2 className="f4 text-normal">All activity</h2>
      <ul className="activities">
        {[1, 22, 3, 4, 5, 6].map((item, index) => {
          return (
            <li key={index}>
              <Popover content="今天是我生日哟，你还记得吗？" trigger="click">
                <img className="avatar" src="https://avatars2.githubusercontent.com/u/14784326?s=64&v=4" alt="" />
              </Popover>

              <div className="activity">
                <p>
                  <Popover content="显示在右边哟，你还记得吗？" trigger="click">
                    <span className="link-gray-dark text-bold">manyua</span>
                  </Popover>
                  <span> starred</span>
                  <span className="link-gray-dark ml-1 text-bold">lingziyb/blog</span>
                  <span className="text-gray-light f6 ml-1">16 hours ago</span>
                </p>
                <div className="project box">
                  <p>dexteryy/spellbook-of-modern-webdev</p>
                  <p>A Big Picture, Thesaurus, and Taxonomy of Modern JavaScript Web </p>
                  <p>10.6k Updated Oct 28</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <button className="more">More</button>
    </div>
  );
}
