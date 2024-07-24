import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { ORIGIN_URL } from "../../constant/imgUrl";
import { useParams } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.div`
  padding: 150px 20%;
  display: flex;
`;

const CoverImg = styled.img`
  width: 45%;
  margin-right: 5%;
  object-fit: cover;
`;

const ConWrap = styled.div`
  width: 40%;

  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const Info = styled.div`
  span {
    display: block;
    padding: 10px 20px;
    background-color: #333;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    margin-right: 15px;
  }
  display: flex;
`;

const Genres = styled.ul`
  list-style: disc;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  li {
    margin-top: 10px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.7;
  margin-top: 100px;
  line-height: 30px;
`;

export const Detail = () => {
  useScrollTop();
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);
        setDetailData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <PageTitle title={detailData.title} />
          <CoverImg
            src={ORIGIN_URL + detailData.poster_path}
            alt={detailData.title}
          />
          <ConWrap>
            <h3>{detailData.title}</h3>
            <Info>
              <span>{detailData.release_date}</span>
              <span>{Math.round(detailData.vote_average)}점</span>
              <span>{detailData.runtime}분</span>
            </Info>

            <Genres>
              {detailData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genres>

            <Desc>{detailData.overview}</Desc>
          </ConWrap>
        </Container>
      )}
    </div>
  );
};
