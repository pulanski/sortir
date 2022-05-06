import { render } from '@testing-library/react';

import BootstrapContent from './BootstrapContent';

describe('BootstrapContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BootstrapContent />);
    expect(baseElement).toBeTruthy();
  });
});
