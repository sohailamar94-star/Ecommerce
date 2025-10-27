import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  Badge
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { EcommState } from "../context/EcommerceContext";

const useStyles = makeStyles({
  title: {
    flex: 1,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer"
  }
});

// -------------dropdown style------------------

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));

// -------------dropdown style------------------

export default function Header() {
  const headerClasses = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    darkTheme,
    currency,
    setCurrency,
    user,
    Buttoncolor,
    BtnTxt,
    BtnActive,
    siteLogocolor,
    selectBoxPopupBackColor,
    selectBoxPopupTextColor,
    selectBoxBackColor,
    selectBoxTextColor,
    selectBoxBackHoverColor,
    selectBoxTextHoverColor,
    selectBoxIconColor,
    selectBoxOutlineColor,
    selectBoxOutlineFocusColor,
    selectBoxOutlineHoverColor
  } = EcommState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography
              className={headerClasses.title}
              onClick={() => navigate("/")}
              variant="h6"
              sx={{ color: "" }}
            >
              SmartShop
            </Typography>

            <Button onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
              <Badge badgeContent={0} color="primary">
                <AddShoppingCartIcon />
              </Badge>
            </Button>
            <StyledMenu open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose} disableRipple>
                the cart is empty...
              </MenuItem>
            </StyledMenu>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
