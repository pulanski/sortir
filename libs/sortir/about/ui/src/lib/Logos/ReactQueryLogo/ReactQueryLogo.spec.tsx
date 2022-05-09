import { render } from '@testing-library/react';

import ReactQueryLogo from './ReactQueryLogo';

describe('ReactQueryLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactQueryLogo logoImage={''} alt={''} href={''} />);
    expect(baseElement).toBeTruthy();
  });
});
