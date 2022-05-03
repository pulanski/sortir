import { render } from '@testing-library/react';

import FaviconConfig from './FaviconConfig';

describe('FaviconConfig', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FaviconConfig />);
    expect(baseElement).toBeTruthy();
  });
});
