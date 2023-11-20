import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    padding-top: ${({ theme }) => theme.spacing(10)};
    padding-bottom: ${({ theme }) => theme.spacing(10)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    padding-top: ${({ theme }) => theme.spacing(10)};
    padding-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: ${({ theme }) => theme.breakpoints.s};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: ${({ theme }) => theme.breakpoints.m};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: ${({ theme }) => theme.breakpoints.l};
  }
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};

    margin-bottom: ${({ theme }) => theme.spacing(7)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fontSizes.large};

    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-bottom: ${({ theme }) => theme.spacing(20)};
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${({ theme }) => theme.spacing(5)};
`;

export const GridItem = styled.li`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  
  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${({ theme }) => theme.spacing(4)};
  transition: transform 0.5s ${({ theme }) => theme.animations.cubicBezier};

  overflow: hidden;
  cursor: zoom-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px ${({ theme }) => theme.colors.primary};
  }
`;
export const Backbutton = styled.button`
    cursor: pointer;
    text-align: center;
   
    font-weight: bold;
    padding: 8px 15px;
    margin-bottom: 15px;
    // margin-top: 25px;
    box-shadow: 1px 2px 2px 0 rgb(0, 0, 0/0.5);
    transition: box-shadow 250ms linear;
    border-radius: 10px;
    border: 3px solid #b38bff;
    background-color: white;
   display: inline-block;
   margin-right: 20px;
   &:hover,
   &:focus {
     text-shadow: 3px 3px 20px #ff3cac, -2px 1px 30px #ff3cac;
     border: 3px solid #ff3cac; 
   }
  
  `;
  export const Left = styled.i`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  border: solid #000;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
}
  `;