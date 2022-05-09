import { render } from '@testing-library/react';

import ChampionsLead from './ChampionsLead';

describe('ChampionsLead', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChampionsLead />);
    expect(baseElement).toBeTruthy();
  });
});
