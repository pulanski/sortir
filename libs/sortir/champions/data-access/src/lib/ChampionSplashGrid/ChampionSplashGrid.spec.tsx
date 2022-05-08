import { render } from '@testing-library/react';

import ChampionSplashGrid from './ChampionSplashGrid';

describe('ChampionSplashGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChampionSplashGrid />);
    expect(baseElement).toBeTruthy();
  });
});
