import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FeatureListProps {}

const StyledFeatureList = styled.div`
  color: pink;
`;

export function FeatureList(props: FeatureListProps) {
  return (
    <StyledFeatureList>
      <h1>Welcome to FeatureList!</h1>
    </StyledFeatureList>
  );
}

export default FeatureList;
