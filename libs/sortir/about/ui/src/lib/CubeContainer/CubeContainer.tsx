import styled from '@emotion/styled';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Cube } from '../Cube/Cube';

/* eslint-disable-next-line */
export interface CubeContainerProps { }

// const StyledCube3D = styled.div`
//   color: pink;
// `;

const StyledCanvas = styled(Canvas)`
  /* background-color: red; */
  width: 20rem !important;
  cursor: pointer;
`;


export function CubeContainer(props: CubeContainerProps) {
  return (
    // <StyledCube3D>
    <StyledCanvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Cube />
    </StyledCanvas>
  );
}

export default CubeContainer;