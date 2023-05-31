import styled from "styled-components"


export const Container = styled.section`
  margin: 2.4rem 0 ;
  padding: 3.2rem;
  border-radius: 1.6rem;

  > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  }
`