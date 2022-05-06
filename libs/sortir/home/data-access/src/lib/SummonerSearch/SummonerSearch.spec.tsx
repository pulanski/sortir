import { render } from '@testing-library/react';

import SummonerSearch from './SummonerSearch';

describe('SummonerSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SummonerSearch />);
    expect(baseElement).toBeTruthy();
  });
});
