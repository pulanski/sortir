import { render } from '@testing-library/react';

import MUILogo from './MUILogo';

describe('MUILogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MUILogo logoImage={''} alt={''} href={''} />);
    expect(baseElement).toBeTruthy();
  });
});
