import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { searchMovie } from "../../api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { W500_URL } from "../../constant/imgUrl";

const Container = styled.div`
  padding: 150px ${spacing.side};
`;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #555;
    &::placeholder {
      font-size: 20px;
    }
    padding: 0 10px;
    font-size: 20px;
    letter-spacing: 0;
  }

  button {
    all: unset;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.h4`
  font-size: 18px;
  margin-top: 20px;
  color: gold;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 15px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 400px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;

    const { results } = await searchMovie(keyword);
    setSearchData(results);
    setIsLoading(false);
  };

  console.log(searchData?.length === 0 ? "없음" : "있음");

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "검색 내용을 입력해 주세요😡",
          })}
          type="text"
          placeholder="검색 내용 입력.."
        />
        <button>
          <FiSearch />
        </button>

        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>

      {searchData?.length === 0 ? (
        "검색결과없음"
      ) : (
        <>
          {searchData && (
            <ConWrap>
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  {searchData.map((data) => (
                    <Con key={data.id}>
                      <Link to={`/detail/${data.id}`}>
                        <Bg>
                          <img
                            src={W500_URL + data.poster_path}
                            alt={data.title}
                          />
                        </Bg>
                      </Link>
                    </Con>
                  ))}
                </>
              )}
            </ConWrap>
          )}
        </>
      )}
    </Container>
  );
};
