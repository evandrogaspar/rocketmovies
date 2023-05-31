import styled from "styled-components"


export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 11.6rem auto;
grid-template-areas: 
"header"
"content";
`
export const Content = styled.div`
  grid-area: content;

  width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding: 6.5rem;

  overflow-y: auto;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > Section {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECTION};
  }

  > Section p{
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: justify;

    margin: 1.5rem 0;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > Section .stars{
   display: flex;
   align-items: center;
   gap: .6rem;

   margin-top: .8rem;
    
  }

  > Section .stars svg {
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`