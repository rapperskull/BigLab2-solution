import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap/';
import { CheckAll } from 'react-bootstrap-icons';
import { LogoutButton } from './Login';


const Navigation = (props) => {
  const { onLogOut, loggedIn, user } = props;

  return (
    <Navbar bg="success" variant="dark" fixed="top">
      <Navbar.Brand href="/">
        <CheckAll className="mr-1" size="30" /> ToDo Manager
      </Navbar.Brand>
      <Nav className="ml-auto">
        { user?.name && 
        <Navbar.Text className="mx-2">
          { `Welcome, ${user.name}!`}
        </Navbar.Text>
        }
        { loggedIn &&
          <Form inline className="mx-2">      
              <LogoutButton logout={onLogOut} />
          </Form>
        }
      </Nav>
    </Navbar>
  )
}

export default Navigation;