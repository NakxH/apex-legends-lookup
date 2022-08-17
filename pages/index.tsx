import { Button, Heading, SearchIcon, TextInput } from 'evergreen-ui'
import type { NextPage } from 'next'
import axios from "axios"

const Home: NextPage = () => {



  // axios.get('https://api.mozambiquehe.re/bridge?auth=${process.env.NEXT_PUBLIC_API_KEY}&player=JakeMezz&platform=Origin')
  // .then(function (response) {
  //   console.log(response);
  // })

  return (
    <>
    <Heading data-testid={"home-heading"}>Apex Legends Lookup</Heading>
    <TextInput name="username-input" placeholder="Enter Username..." data-testid={"username-input"} />
    <Button marginY={8} marginRight={12} iconBefore={SearchIcon} >
        Search Player
      </Button>
    </>
  )
}

export default Home
