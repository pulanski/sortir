import styled from '@emotion/styled';
import { Paper, Card, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';

/* eslint-disable-next-line */
export interface AboutProps { }

const StyledAbout = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid pink;
`;

export function About(props: AboutProps) {

  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: {
      x: -100,
      y: 400,
      opacity: 0,
    },
    enter: {
      x: 0,
      y: 0,
      opacity: 1
    },
    leave: {
      x: 100,
      y: 400,
      opacity: 0
    },
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <StyledAbout>
      {/* <Button variant='outlined' onClick={() => {
        console.log('clicked');
        setIsVisible(!isVisible);
      }}>
        {isVisible ? 'Hide' : 'Show'}
      </Button> */}
      {/* {
        transition((style, item) => {
          return item && <animated.div style={style}>
            <Card>
              <h1>Hello</h1>
            </Card>
          </animated.div>;
        })
      } */}
      {/* Built with <span role='img' aria-label='heart'>❤️</span> by <a href='https://github.com/pulanski/'>pulanski</a> */}

      Built with:
      <ul>
        Programming Languages
        <li>
          <a href='https://www.javascript.com/'>JavaScript</a>
        </li>
        <li>
          <a href='https://www.typescriptlang.org/'>TypeScript</a>
        </li>
        Framework
        <li>
          <a href='https://reactjs.org/'>React</a>
        </li>
        Styling Engine
        <li>
          <a href='https://emotion.sh/'>Emotion</a>
        </li>
        Data Fetching & Synchronization
        <li>
          <a href='https://react-query.tanstack.com/'>React Query</a>
        </li>
        Client-Side Routing
        <li>
          <a href='https://reactrouter.com/'>React Router</a>
        </li>
        UI/UX
        <li>
          <a href='https://material-ui.com/'>Material-UI</a>
        </li>
        <li>
          <a href='https://chakra-ui.com/'>Chakra-UI</a>
        </li>
        Animations
        <li>
          <a href='https://react-spring.io/'>react-spring</a>
          <p>
            A spring-physics based animation library to bring your components to life with simple spring animation primitives.
          </p>
        </li>
        <li>
          <a href='https://www.framer.com/motion/'>Framer Motion</a>
          <p>
            Provides a simple, declarative way to create animated components in order for a more readable codebase.
          </p>
        </li>
        Reactive Extensions
        <li>
          <a href='https://rxjs.dev/'>RxJS</a>
          <p>
            Provides a library of operators for reactive programming.
          </p>
        </li>
        Machine Learning
        <li>
          <a href='https://tensorflow.org/'>TensorFlow.js</a>
          <p>
            A JavaScript wrapper for the popular machine learning library,TensorFlow, written in Python.
          </p>
        </li>
        API
        <li>
          <a href='https://developer.riotgames.com/docs/lol'>Riot Games API</a>
          <p>
            A RESTful API that provides access to live game data, game metadata, player data, and assets.
          </p>
        </li>
      </ul>

      <Typography variant='h4'>
        Acknowledgements:
      </Typography>

      <Card>
        <Typography variant='h5'>
          Component Library
        </Typography>
      </Card>

      <ul>
        <Typography variant='h5'>
          Component Library
        </Typography>
        <li>
          <a href='https://reactstrap.github.io/?path=/story/home-installation--page'>reactstrap</a>
          <p>
            A React component library for Bootstrap 5.1.
          </p>
        </li>
        Design Assets
        <li>
          <a href='https://app.haikei.app/'>Haikei</a>
        </li>
        <p>
          A tool for generating unique SVG shapes, backgrounds, and patterns.
        </p>
        Icons
        <li>
          <a href='https://react-icons.github.io/react-icons/'>React Icons</a>
        </li>
        Fonts
        <li>
          <a href='https://fonts.google.com/'>Google Fonts</a>
        </li>
        Code Splitting
        <li>
          <a href='https://github.com/gregberge/loadable-components'>Loadable Components</a>
        </li>
      </ul>
    </StyledAbout>
  );
}

export default About;
