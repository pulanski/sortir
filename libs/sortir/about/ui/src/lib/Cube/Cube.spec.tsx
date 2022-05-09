import { render } from '@testing-library/react';

import Cube from './Cube';

describe('Cube', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cube />);
    expect(baseElement).toBeTruthy();
  });
});
