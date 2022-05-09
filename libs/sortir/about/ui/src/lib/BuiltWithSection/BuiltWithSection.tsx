import NxLogoImage from './nx-logo.png';
import TypeScriptLogoImage from './typescript-logo.png';
import ReactLogoImage from './react-logo.png';
import riotAPILogo from './riot-api-logo.png';
import emotionLogo from '../../../../../../../apps/sortir/src/assets/emotion-logo.png';
import reactQueryLogo from './react-query-logo.svg';
import reactRouterLogo from './react-router-logo.png';
import muiLogo from './mui-logo.png';
import reactSpringImage from './react-spring-logo.png';
import framerMotionImage from './framer-motion-logo.webp';
import FramerMotionLogo from '../Logos/FramerMotionLogo/FramerMotionLogo';
import ReactSpringLogo from '../Logos/ReactSpringLogo/ReactSpringLogo';
import NxLogo from "../Logos/NxLogo/NxLogo";
import { StyledPaper, StyledTypography, StyledSlider } from "./BuiltWithSection.styled";
import TypeScriptLogo from '../Logos/TypeScriptLogo/TypeScriptLogo';
import ReactLogo from "../Logos/ReactLogo/ReactLogo";
import MUILogo from "../Logos/MUILogo/MUILogo";
import ReactRouterLogo from '../Logos/ReactRouterLogo/ReactRouterLogo';
import ReactQueryLogo from "../Logos/ReactQueryLogo/ReactQueryLogo";
import EmotionLogo from '../Logos/EmotionLogo/EmotionLogo';
import RiotGamesAPILogo from '../Logos/RiotGamesAPILogo/RiotGamesAPILogo';

export function BuiltWithSection() {
  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <StyledPaper>
      <StyledTypography variant='h5'>
        Built with
      </StyledTypography>
      <StyledSlider {...settings}>
        <NxLogo
          logoImage={NxLogoImage}
          alt="Nx Logo"
          href="https://nx.dev"
        />
        <TypeScriptLogo
          logoImage={TypeScriptLogoImage}
          alt="TypeScript Logo"
          href="https://www.typescriptlang.org/"
        />
        <ReactLogo
          logoImage={ReactLogoImage}
          alt="React Logo"
          href="https://reactjs.org/"
        />
        <RiotGamesAPILogo
          logoImage={riotAPILogo}
          alt="Riot Games API Logo"
          href="https://developer.riotgames.com/"
        />
        <EmotionLogo
          logoImage={emotionLogo}
          alt="Emotion Logo"
          href="https://emotion.sh"
        />
        <ReactQueryLogo
          logoImage={reactQueryLogo}
          alt="React Query Logo"
          href="https://react-query.tanstack.com/"
        />
        <ReactRouterLogo
          logoImage={reactRouterLogo}
          alt="React Router Logo"
          href="https://reactrouter.com/"
        />
        <MUILogo
          logoImage={muiLogo}
          alt="MUI Logo"
          href="https://material-ui.com/"
        />
        <ReactSpringLogo
          logoImage={reactSpringImage}
          alt="React Spring Logo"
          href="https://react-spring.io/"
        />
        <FramerMotionLogo
          logoImage={framerMotionImage}
          alt="Framer Motion Logo"
          href="https://www.framer.com/motion/"
        />
      </StyledSlider>
    </StyledPaper>
  );
}

export default BuiltWithSection;