import React from 'react';
import { Container, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

class ReactstrapExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      value : "Home"
    };
  }
  
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }
  
  render() {
    return (
      <Container className="py-4">
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>{this.state.value}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.select}>Work</DropdownItem>
          <DropdownItem onClick={this.select}>Contact</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      </Container>
    );
  }
}
export default ReactstrapExample