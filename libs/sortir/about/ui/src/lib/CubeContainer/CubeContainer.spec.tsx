import { render } from '@testing-library/react';

import CubeContainer from './CubeContainer';

describe('Cube3D', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CubeContainer />);
    expect(baseElement).toBeTruthy();
  });
});
