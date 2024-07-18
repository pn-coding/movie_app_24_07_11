import { useEffect, useState } from "react";
import { movieDetail } from "../../api";

export const Detail = () => {
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(1022789);
        setDetailData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(detailData.title);

  return <div>Detail</div>;
};
