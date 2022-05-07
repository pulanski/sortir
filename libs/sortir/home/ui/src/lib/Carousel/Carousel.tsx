import styled from '@emotion/styled';
import { Card, CardContent, Grid, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface CarouselProps { }

const StyledCarousel = styled.div`
  color: pink;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const StyledGridContainer = styled(Grid)`
  width: 80vw;
`;

const StyledCard = styled(Card)`
  margin: 1rem 3vw;
  padding: 1rem;
  border: 1px solid pink;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #1E1E1E;
    /* color: #1752C6; */
    box-shadow: 0px 4px 18px 0px #030d20;
  }
`;

const StyledTypographyTitle = styled(Typography)`
  color: #2d5179;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledTypographyDescription = styled(Typography)`
  text-align: center;
`;

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Focus on what matters',
    description: 'Sortir is designed to be simple, intuitive, and useful. We provide a collection of tools and resources to help you get the most out of your time on the rift.',
  },
  {
    title: 'Feature 2',
    description: 'This is a description of feature 2',
  },
  {
    title: 'Feature 3',
    description: 'This is a description of feature 3',
  }
];

export function Carousel(props: CarouselProps) {
  return (
    <StyledCarousel>
      <StyledGridContainer container spacing={2}>
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <StyledTypographyTitle variant='h5'>
                  {feature.title}
                </StyledTypographyTitle>
                <StyledTypographyDescription variant='body1'>
                  {feature.description}
                </StyledTypographyDescription>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </StyledGridContainer>
      {/* <h1>Welcome to Carousel!</h1> */}
    </StyledCarousel>
  );
}

export default Carousel;
