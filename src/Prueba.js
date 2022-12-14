import React from 'react'
import { Navbar, Button, Link, Text, Card, Radio, useTheme } from "@nextui-org/react";



function Prueba() {
  return (
    <div>
       <Navbar 
       
        css={{
            boxSizing: 'border-box',
            maxWidth: '100%',
            position: 'fixed',
            
        }}
       
        maxWidth={'xl'}  
       
       variant={'sticky'}>
        <Navbar.Brand>
          
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>



    </div>
  )
}

export default Prueba


