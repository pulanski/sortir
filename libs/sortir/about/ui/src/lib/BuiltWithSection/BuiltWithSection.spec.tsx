import { render } from '@testing-library/react';
import BuiltWithSection from './BuiltWithSection';


describe('About', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuiltWithSection />);
    expect(baseElement).toBeTruthy();
  });
});
