import React, { Component } from "react";
import { Button,ButtonDropdown,DropdownToggle,
    DropdownMenu,DropdownItem } from "reactstrap";
class Themeswitcher extends Component{
    state={theme:null,dropdownOpen:false}
    toggleDropdown=()=>{
        this.setState({dropdownOpen:!this.state.dropdownOpen});
    }
    resetTheme=evt=>{
        evt.preventDefault();
        this.setState({theme:null});
    }
    chooseTheme=(theme,evt)=>{
        evt.preventDefault();
        this.setState({theme});
    }
    render(){
        const{theme,dropdownOpen}=this.state;
        const themeClass=theme ? theme.toLowerCase():'secondary';
        return(
            <div className="d-flex flex-wrap justify-content-center align-items-center">
                <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{theme || 'default'}</span>
                <ButtonDropdown isOpen={dropdownOpen}toggle={this.toggleDropdown}>
                    <Button id="caret" color={themeClass}>{theme || 'custom'}Theme</Button>
                    <DropdownToggle caret size="lg" color={themeClass}/>
                    <DropdownMenu>
                        <DropdownItem onClick={e=>this.chooseTheme('Primary',e)}>Primary theme</DropdownItem>
                        <DropdownItem onClick={e=>this.chooseTheme('Danger',e)}>Danger theme</DropdownItem>
                        <DropdownItem onClick={e=>this.chooseTheme('Success',e)}>Success theme</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem onClick={this.resetTheme}>Default theme</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        );
    }
}
export default Themeswitcher;