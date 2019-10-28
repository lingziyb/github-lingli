import React from "react";
import "./index.less";

export default function HomeCenter() {
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
        <li>
          <img className="avatar" src="https://avatars2.githubusercontent.com/u/14784326?s=64&v=4" alt="" />
          <div className="activity">
            <p>
              <span className="link-gray-dark text-bold">manyuanrong</span> starred
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

        <li>
          <img className="avatar" src="https://avatars2.githubusercontent.com/u/14784326?s=64&v=4" alt="" />
          <div className="activity">
            <p>
              <span className="link-gray-dark text-bold">manyuanrong</span> starred
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

        <li>
          <img className="avatar" src="https://avatars2.githubusercontent.com/u/14784326?s=64&v=4" alt="" />
          <div className="activity">
            <p>
              <span className="link-gray-dark text-bold">manyuanrong</span> starred
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
      </ul>

      <button className="more">More</button>
    </div>
  );
}
