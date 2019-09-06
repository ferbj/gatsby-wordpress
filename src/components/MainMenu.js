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
                      <MenuItem to={`/` + item.object_slug} key={item.title}>
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
    )}
  />
);

export default MainMenu;
