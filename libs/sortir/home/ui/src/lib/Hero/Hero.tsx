import logo from '../../../../../../../apps/sortir/src/assets/logo.png';
import Logo from '../Logo/Logo';
import { StyledHero } from './Hero.styled';
import HeroSubtitle from '../HeroSubtitle/HeroSubtitle';
import HeroLead from '../HeroLead/HeroLead';

/* eslint-disable-next-line */
export interface HeroProps { }

export function Hero(props: HeroProps) {
  return (
    <StyledHero>
      <Logo logo={logo} />
      <HeroLead />
      <HeroSubtitle />
    </StyledHero>
  );
}

export default Hero;

