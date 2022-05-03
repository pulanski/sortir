import { render } from '@testing-library/react';

import RouterConfig from './RouterConfig';

describe('RouterConfig', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RouterConfig />);
    expect(baseElement).toBeTruthy();
  });
});
