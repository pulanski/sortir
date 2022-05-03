import styled from '@emotion/styled';
import Favicon from 'react-favicon';

/* eslint-disable-next-line */
export interface FaviconConfigProps { }

export function FaviconConfig(props: FaviconConfigProps) {

  const faviconUrl = 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png'

  return (
    <Favicon url={faviconUrl} />
  );
}

export default FaviconConfig;
