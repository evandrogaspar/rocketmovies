import styled from "styled-components"

export const Container = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap:.8rem;

width: 20%;
height: 4.8rem;

background-color: ${({ theme }) => theme.COLORS.PINK_100};
color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

font-weight: 400;

padding: 3.2rem;

border-radius: .8rem;
border: 0;

> svg { 
 font-size: 2rem;
}
`