import React, { useEffect, useState } from "react";
import { githubService } from "../../../common/request";
import HomeLeft from "../left";
import HomeCenter from "../center";
import HomeRight from "../right";
import "./index.less";
import { store } from "../../../common/store";

export default function HomePage() {
  useEffect(() => {
    (async () => {
      const userInfo = await githubService.get<Models.IUser>("/users/lingziyb").then(data => data.data);
      store.user = userInfo;
    })();
  }, []);

  return (
    <div className="p-home">
      <HomeLeft />
      <HomeCenter />
      <HomeRight />
    </div>
  );
}
