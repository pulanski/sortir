import { render } from '@testing-library/react';

import HeroLead from './HeroLead';

describe('HeroLead', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLead />);
    expect(baseElement).toBeTruthy();
  });
});
