import './nav.scss'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { S_IFLNK } from 'constants';

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

  renderLinks(){
    const { authLinks, commonLinks, noAuthLinks } = this.state;
    const auth = false;

    let links = [...commonLinks];

    if(auth){
      links = [...links, ...authLinks ]
    } else {
      links = [ ...links, ...noAuthLinks ];
    }

    return links.map(link=>{
      return (
        <li key={link.to}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      )
    })
  }

  render(){
    return(
      <nav className="black">
       <Link className="brand-logo" to="/">Movie Quotes</Link>
       <ul className="right">
        {this.renderLinks()}
       </ul>
      </nav>
    )
  }
}

export default Nav;