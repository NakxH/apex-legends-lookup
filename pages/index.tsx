import { Button, Heading, SearchIcon, TextInput } from 'evergreen-ui'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Heading data-testid={"home-heading"}>Apex Legends Lookup</Heading>
    <TextInput name="username-input" placeholder="Enter Username..." data-testid={"username-input"} />
    <Button marginY={8} marginRight={12} iconBefore={SearchIcon}>
        Search
      </Button>
    </>
  )
}

export default Home
