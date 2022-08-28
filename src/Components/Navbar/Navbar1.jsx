import React from 'react'
import { Navbar, Avatar, Dropdown, Link, Text, NextUIProvider, Input } from "@nextui-org/react";
import { CartIcon } from '../../icons/CartIcon';
import dark from '../../Themes/Dark';


function Navbar1() {

  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];



  return (




    <NextUIProvider theme={dark}>
      <Navbar css={{ position: 'fixed', }} maxWidth={'xl'} isBordered variant="sticky" disableScrollHandler={true}>

        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />

          <Text b color="inherit" size={"$2xl"} hideIn="xs" css={{ marginLeft: '50px' }}>
            AYAWMA
          </Text>
        </Navbar.Brand>

        <Navbar.Content css={{ width: '50%', }}>
          <Input type="text" placeholder='Search...' bordered css={{ width: '50%', marginLeft: '20%' }} />
        </Navbar.Content>




        <Navbar.Content
          css={{
            "@xs": {
              w: "15%",
              jc: "flex-end",
            },
          }}
        >


          {/* Utilizar el badge para hacer las notificaciones */}
          <CartIcon size={30} />



          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>





        <Navbar.Collapse css={{ width: '100%', }} disableScrollHandler={true}>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item} css={{ overflow: 'hidden' }} >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </NextUIProvider>










  )
}



export default Navbar1