import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";

export const Home = () => {
  const [nowData, setNowData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowData(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);

  return <div>Home</div>;
};

// *예외
// 1.컴파일 에러: 프로그램이 실행되기 전에 발생하는 오류
// 2.런타임 에러: 프로그램이 실행 중 발생하는 오류

// *try ~ catch
// =>예외가 발생할것 같은 코드를 제어함
// ex)
// try{
//   예외 발생 가능성이 있는 코드 작성
// }catch(error){
//   예외가 발생했을때 처리
// }finally{
//   예외와 상관없이 무조건 실행해야하는 코드
// }
