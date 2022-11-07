/* eslint-disable @next/next/no-img-element */
import { globalStyles } from "../styles/global";
import { AppProps } from "next/app";

import { Container, Header } from "../styles/pages/app";
import logoImg from '../assets/logo.svg';
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <img src={logoImg.src} alt=""/>
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}


