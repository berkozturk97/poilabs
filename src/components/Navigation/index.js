import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 2,
  },
  logoContainer: {
    paddingLeft: 36,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: "Titillium Web",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      color: "black",
      backgroundColor: "transparent",
    },
  },
  buttonFind: {
    marginRight: 36,
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "400",
    whiteSpace: "break-spaces",
    "&:hover": {
      color: "black",
      backgroundColor: "transparent",
    },
  },
  title: {
    display: "none",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderNav = () => {
    return (
      <div>
        <Button className={classes.button} href="/" color="inherit">
          Home
        </Button>
        <Button className={classes.button} href="/campaigns" color="inherit">
          Campaigns
        </Button>
        <Button className={classes.button} href="/settings" color="inherit">
          Settings
        </Button>
      </div>
    );
  };

  const renderNavMobile = () => {
    return (
      <div>
        <MenuItem>
          <Button className={classes.button} href="/" color="inherit">
            Home
          </Button>
        </MenuItem>
        <MenuItem>
          <Button className={classes.button} href="/campaigns" color="inherit">
            Campaigns
          </Button>
        </MenuItem>
        <MenuItem>
          <Button className={classes.button} href="/settings" color="inherit">
            Settings
          </Button>
        </MenuItem>
      </div>
    );
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {renderNavMobile()}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar color="white" position="static">
        <Toolbar>
          <div className={classes.logoContainer}>
            <svg width="150" height="50" xmlns="http://www.w3.org/2000/svg">
              <a href="/">
                <image
                  href="/assets/poi-labs-logo.png"
                  height="50"
                  width="150"
                />
              </a>
            </svg>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>{renderNav()}</div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
           
          </div>
        </Toolbar>
        {renderMobileMenu}
      </AppBar>
     
    </div>
  );
}
