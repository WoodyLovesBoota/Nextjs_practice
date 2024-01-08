import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const NavigationBar = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Link href="/">
        <RouteName>Home</RouteName>
      </Link>
      <Link href="/about">
        <RouteName>About</RouteName>
      </Link>
    </Wrapper>
  );
};

export default NavigationBar;

const Wrapper = styled.div`
  display: flex;
`;

const RouteName = styled.h2`
  color: red;
  margin-right: 10px;
`;
