import React, { useEffect } from "react";
import { githubService } from "../../common/request";

export default function HomePage() {
  useEffect(() => {
    (async () => {
      const res = await githubService.get<Models.IArticle>("/users/lingziyb");
      console.log(123, res);
    })();
  }, []);

  return <div>home</div>;
}
