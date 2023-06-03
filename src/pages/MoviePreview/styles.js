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

  ::-webkit-scrollbar {
    width: .6rem;

  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.PINK};
    
    border-radius: .8rem;
    
  }

  ::-webkit-scrollbar-track{
    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_800};

  }
   a{
    display: flex;
    align-items: center;
    gap: .5rem;
    
    color: ${({ theme }) => theme.COLORS.PINK_100};

    svg {
      font-size: 2rem;
    }
   }

  > Button {
    display: flex;
    align-items: center;
    gap: .8rem;

    margin-left: 3rem;
  }

  > Section {
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};

  }

  > Section .title {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  > Section h2{
    font-size: 3.6rem;
    font-weight: 500;
  }

  > Section .stars {
    
   display: flex;
   align-items: center;
   gap: 1rem;

   font-size: 2rem;

   margin-top: .8rem;
   color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  > Section .user-details {
    margin-top: 2.4rem;
    margin-bottom: 4rem;

    display: flex;
    gap: .8rem;

  }

  > Section .profile {
     display: flex;
     align-items: center;
     justify-content: center;
     gap: .6rem;

     img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius:50%;
     }
  }

  > Section .date {
    display: flex;
     align-items: center;
     justify-content: center;
     gap: .6rem;

     svg {
      color: ${({ theme }) => theme.COLORS.PINK_100};
     }
  }

  > Section p{
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: justify;

    margin-top: 6rem;
  }
` 