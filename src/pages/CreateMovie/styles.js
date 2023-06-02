import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 10.5rem auto;
grid-template-areas:
"header"
"content";

> main {
  grid-area: content;
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
}

.tags {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: 1.6rem;
  margin-top:.8rem;

  border-radius: .8rem;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
}

  
`

export const Form = styled.form`
 max-width: 113rem;
 margin: 3.5rem auto;

 > header {
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 gap: 2.4rem;

 margin-bottom:  3.6rem;

  button {
   font-size: 2rem;

   display: flex;
   align-items: center;
  }

  h2{
    font-size: 3.6rem;
    font-weight: 500;
  }
 }

 > .inputs {
  display: flex;
  align-items: center;
  gap: 4rem;

  margin-bottom: 4rem;
 }
 
 > section h2 {
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
 }

 > .buttons {
  display: flex;
  align-items: center;
  gap: 4rem;

  > button:nth-child(1){
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
 }

 
`