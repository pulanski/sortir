import styled from '@emotion/styled';
import FaviconConfig from '../FaviconConfig/FaviconConfig';
import RouterConfig from '../RouterConfig/RouterConfig';

/* eslint-disable-next-line */
export interface CoreProps { }

const StyledCore = styled.div`
  color: pink;
`;

export function Core(props: CoreProps) {

  return (
    <StyledCore>
      <FaviconConfig />
      <RouterConfig />
    </StyledCore>
  );
}

export default Core;
