import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { StyledHeader, TabNavigation } from "./styles/Header.styled";
import { HeaderAction } from "./styles/HeaderAction.styled";
import {
  HeaderMenu,
  MenuOpener,
  UserAvatar,
  UserName,
} from "./styles/HeaderMenu.styled";
import { Navigation, Logo } from "./styles/HeaderNavigation.styled";
import { Container } from "./styles/Container.styled";

const tabsHeader = [
  { id: 1, name: "Feed", href: "/feed" },
  { id: 2, name: "Explore", href: "/explore" },
  { id: 3, name: "Discussions", href: "/discussions" },
];

const AnimatedStyledHeader = motion(StyledHeader);

const Header = () => {
  return (
    <AnimatedStyledHeader
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 10, duration: 0.5 }}
    >
      <Container>
        <Navigation role="navigation" aria-label="Main navigation">
          <Logo href="/">
            <img src="public/logo.svg" alt="Logo" />
          </Logo>
          <HeaderMenu>
            <UserName>Arthur Wood</UserName>
            <UserAvatar src="public/images/Rectangle Copy 5@2x.png" />
            <MenuOpener src="public/icons/a_icon_arrow.svg" />
            <HeaderAction>
              <li>
                <a href="#" aria-label="View Notifications">
                  <img
                    src="public/icons/notifications.svg"
                    alt="Notifications"
                    width="24"
                    height="24"
                  />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Share Recap">
                  <img
                    src="public/icons/share_recap.svg"
                    alt="Share Recap"
                    width="24"
                    height="24"
                  />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Settings">
                  <img
                    src="public/icons/medium.svg"
                    alt="Settings"
                    width="24"
                    height="24"
                  />
                </a>
              </li>
            </HeaderAction>
          </HeaderMenu>
        </Navigation>

        <TabNavigation>
          {tabsHeader.map((tab) => (
            <NavLink
              to={tab.href}
              key={tab.id}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {tab.name}
            </NavLink>
          ))}
        </TabNavigation>
      </Container>
    </AnimatedStyledHeader>
  );
};

export default Header;
