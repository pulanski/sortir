import { render } from '@testing-library/react';

import Core from './Core';

describe('Core', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Core />);
    expect(baseElement).toBeTruthy();
  });
});
