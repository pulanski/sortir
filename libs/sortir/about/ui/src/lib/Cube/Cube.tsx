import styled from '@emotion/styled';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import texture from './map.jpeg';

/* eslint-disable-next-line */
export interface CubeProps { }

const StyledCube = styled.div`
  color: pink;
`;

export function Cube(props: CubeProps) {

  const colorMap = useLoader(TextureLoader, texture);

  return (
    <>
      <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshStandardMaterial
          map={colorMap}
        />
      </mesh>
    </>
  );
}


export default Cube;
