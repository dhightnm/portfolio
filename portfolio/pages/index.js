import About from './components/About.jsx'
import NavBar from './components/NavBar'
import Home from './components/Home.jsx'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Button, Row, Script } from 'react-bootstrap';


export default function App() {
  return (
  <SSRProvider>
    <NavBar />
    <Home />
  </SSRProvider>
  )
}
