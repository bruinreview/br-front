import React, {Component} from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';
import './MobileNav.css';


export default class MobileNav extends Component{
    constructor(props){
        super(props);
        this.state={
            menuOpen: false,
        }
    }
    render(){
        return(
            <React.Fragment>
                <div style={{transform: this.state.menuOpen ? 'translateY(0)' : 'translateY(-100%)'}} className="mobileMenu flex flex-column items-center">
                    <Link className="no-underline nav pa3" style={{width:'100%'}} to="/apply">apply</Link>
                    <Link className="no-underline nav pa3" style={{width:'100%'}} to="/print">print</Link>
                    <Link className="no-underline nav pa3" style={{width:'100%'}} to="/">home</Link>
                </div>
                <div className="navBar">
                <HamburgerMenu
                    isOpen={this.state.menuOpen}
                    menuClicked={()=>{this.setState({menuOpen: !this.state.menuOpen})}}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}/>
                </div>
            </React.Fragment>
        );
    }

}
