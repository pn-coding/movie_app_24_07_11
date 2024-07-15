import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors } from "../GlobalStyled";

const Container = styled.header`
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const LOGO = styled.div`
  font-size: 26px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }
`;

const Menu = styled.ul`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 150px;
  }
`;

export const Header = () => {
  return (
    <Container>
      <LOGO>
        <Link to={routes.home}>MOVIE</Link>
      </LOGO>

      <Menu>
        <li>
          <Link to={routes.home}>HOME</Link>
        </li>
        <li>
          <Link to={routes.detail}>Search</Link>
        </li>
      </Menu>
    </Container>
  );
};
