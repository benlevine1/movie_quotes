import './nav.scss'
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './side_nav'


class Nav extends Component{
  state = {
    commonLinks: [
      {
        text: 'Home',
        to: '/'
      },
      {
        text: 'About Us',
        to: '/about'
      },
      {
        text: 'Movie List',
        to: 'movie-list'
      }
    ],
    noAuthLinks: [
      {
        text: 'Sign In',
        to: '/sign-in'
      },
      {
        text: 'Sign Up',
        to: '/sign-up'
      }
    ],
    authLinks:[
      {
        text: 'Secret Movie List',
        to: '/secret-movie-list'
      },
      {
        text: 'Movie Quotes',
        to: '/movie-quotes'
      }
    ]
  }

  buildLink(link){
    return(
      <li key={link.to}>
        <Link to={link.to}>{link.text}</Link>
      </li>
    )
  }
  handleSignOut = () => {
    console.log('sign-out button clicked')
  }

  renderLinks(){
    const { authLinks, commonLinks, noAuthLinks } = this.state;
    const auth = true ;

    let links = [...commonLinks];

    if(auth){
      links = [...links, ...authLinks ].map(this.buildLink);

      links.push(
        <li key="sign-out">
          <button onClick = {this.handleSignOut} className="btn black">Sign Out</button>
        </li>
      )
    } else {
      links = [ ...links, ...noAuthLinks ].map(this.buildLink);
    }

    return links
  }

  render(){
    const links = this.renderLinks();
    return(
      <Fragment>
        <nav className="black">
          <Link className="brand-logo" to="/">Movie Quotes</Link>
          <a href="#" data-target="side-nav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {links}
          </ul>
        </nav>
        <SideNav links={links}/>
      </Fragment>
    )
  }
}

export default Nav;