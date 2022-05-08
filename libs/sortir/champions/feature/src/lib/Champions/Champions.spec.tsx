import { render } from '@testing-library/react';

import Champions from './Champions';

describe('Champions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Champions />);
    expect(baseElement).toBeTruthy();
  });
});
