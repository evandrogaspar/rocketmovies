import styled from "styled-components"


export const Container = styled.header`
grid-area: header;

width: 100%;
height: 11.6rem;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_BORDER};

display: flex;
align-items: center;
justify-content: space-between;
gap: 6.4rem;

padding: 2.4rem 12.3rem;
`

export const Brand = styled.div`
font-weight: 700;

color: ${({ theme }) => theme.COLORS.PINK};;
`

export const Profile = styled.div`
display: flex;
align-items: center;


> div {

  display: flex;
  flex-direction: column;
 
  margin-right:.9rem;

  text-align: right;
  
  strong {
  font-size: 1.4rem;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  }

  span a {
  font-size: 1.4rem;
  font-weight: 400;

  color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
}


> img {
  width: 6.4rem;
  height: 6.4rem;

  border-radius: 50%;
}

`