import { graphql, StaticQuery, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
//import './style.css';
import "./menu-animation.css";
//import SiteInfo from './SiteInfo';

/*const MainMenuWrapper = styled.div`
 background-color: transparent
`;
const MainMenuInner = styled.div`
  max-width: 960px;
  margin:0 auto;
  display:flex;
  width: 960px;
  vertical-align: baseline
`

const MenuItem = styled(Link)`
  display:block;
  padding: 8px 16px;
`;
/*
const MainMenu = () =>(
<StaticQuery query={graphql`{
  allWordpressWpApiMenusMenusItems(filter: {
    name: {
      eq: "Main"
    }
  }){
    edges{
      node{
        name
        items{
          title
          object_slug
        }
      }
    }
  }
}`
} render = {props => (
    <MainMenuWrapper>
      <MainMenuInner>
        <SiteInfo/>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map( item => (
        <MenuItem to={item.object_slug} key={item.title}>
          {item.title}
        </MenuItem>
        ))}
      </MainMenuInner>
    </MainMenuWrapper>
    )} />
);
*/

//export default MainMenu;

const MenuItem = styled(Link)``;
const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Menu" } }) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div>
        <header
          className="site-header ast-primary-submenu-animation-fade header-main-layout-1 ast-primary-menu-enabled ast-menu-toggle-icon ast-mobile-header-inline"
          itemType="https://schema.org/WPHeader"
          itemScope="itemscope"
          id="masthead"
          role="banner"
        >
          <div className="main-header-bar-wrap">
            <div className="main-header-bar">
              <div className="ast-container">
                <div className="ast-flex main-header-container">
                  <div className="site-branding">
                    <div
                      className="ast-site-identity"
                      itemScope="itemscope"
                      itemType="https://schema.org/Organization"
                    >
                      <span className="site-logo-img">
                        <a
                          href="https://dev-prueba-builders.pantheonsite.io/"
                          className="custom-logo-link"
                          rel="home"
                        >
                          <img
                            src={
                              "https://dev-prueba-builders.pantheonsite.io/wp-content/uploads/2019/04/sierra_nature_logo.svg"
                            }
                            className="custom-logo astra-logo-svg"
                            alt="Prueba Builder"
                            width="100%"
                            height="100%"
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="ast-mobile-menu-buttons">
                    <div className="ast-button-wrap">
                      <button
                        type="button"
                        className="menu-toggle main-header-menu-toggle ast-mobile-menu-buttons-outline"
                        aria-controls="primary-menu"
                        aria-expanded="false"
                        data-index="0"
                      >
                        <span className="screen-reader-text">Main Menu</span>
                        <span className="menu-toggle-icon"></span>
                      </button>
                    </div>
                  </div>
                  <div className="ast-main-header-bar-alignment">
                    <div className="main-header-bar-navigation">
                      <nav
                        itemType="https://schema.org/SiteNavigationElement"
                        itemScope="itemscope"
                        id="site-navigation"
                        className="ast-flex-grow-1 navigation-accessibility"
                        role="navigation"
                        aria-label="Site Navigation"
                      >
                        <div className="main-navigation">
                          <ul
                            id="primary-menu"
                            className="main-header-menu ast-nav-menu ast-flex ast-justify-content-flex-end  submenu-with-border astra-menu-animation-fade "
                          >
                            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                              item => (
                                <li
                                  id="menu-item-85"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-85"
                                  key={item.title}
                                >
                                  <MenuItem
                                    to={`/` + item.object_slug}
                                    key={item.title}
                                  >
                                    {item.title}
                                  </MenuItem>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )}
  />
);

export default MainMenu;
