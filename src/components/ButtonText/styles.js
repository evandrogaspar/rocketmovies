import styled from "styled-components";

export const Container = styled.button`
 display: flex;
 gap:.2rem;
 font-size: 1.6rem;

border: none;
background: none;

color: ${({ theme }) => theme.COLORS.PINK_100};

svg {
      font-size: 2rem;
    }
`