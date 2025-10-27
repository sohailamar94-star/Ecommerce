import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import axios from "axios";
import { createTheme } from "@mui/material";

const EcommContext = createContext();

// -----------------------------------------------------

// ------------for color------------

export const BackColor = "#0b1426";
export const Buttoncolor = "rgba(17,153,250,.25)";
export const BtnTxt = "#0b1e37";
export const BtnActive = "#24a0f5";

export const siteLogoColor = BtnActive;
export const siteBackColor = BackColor;
export const siteTextColor = BtnActive;
export const linearProgressColor = BtnActive;
export const circularProgressColor = BtnActive;
export const paginationColor = BtnActive;

export const buttonBorderColor = Buttoncolor;
export const buttonBackColor = "";
export const buttonTextColor = BtnActive;
export const buttonBorderHoverColor = "";
export const buttonBackHoverColor = BtnTxt;
export const buttonTextHoverColor = BtnActive;
export const buttonBorderActiveColor = "";
export const buttonBackActiveColor = BtnActive;
export const buttonTextActiveColor = BtnTxt;
export const buttonBorderActiveHoverColor = "";
export const buttonBackActiveHoverColor = BackColor;
export const buttonTextActiveHoverColor = BtnActive;

export const authButtonBackColor = Buttoncolor;
export const authButtonTextColor = BtnActive;
export const authButtonBorderColor = "transparent";
export const authButtonBackHoverColor = BtnTxt;
export const authButtonTextHoverColor = BtnActive;
export const authButtonBorderHoverColor = BtnActive;

export const coinListGridBackColor = BtnTxt;
export const graphGridBackColor = BackColor;
export const graphGridBorderColor = Buttoncolor;
export const graphLineBorderColor = Buttoncolor;

export const currencySymbolColor = BtnActive;

export const textFieldInputColor = "#fff";
export const textFieldLabelColor = Buttoncolor;
export const textFieldBorderColor = BtnActive;
export const textFieldBorderHoverColor = BackColor;
export const textFieldBorderFocusColor = Buttoncolor;

export const selectBoxPopupBackColor = BtnTxt;
export const selectBoxPopupTextColor = BtnActive;
export const selectBoxBackColor = "";
export const selectBoxBackHoverColor = BtnTxt;
export const selectBoxTextColor = BtnActive;
export const selectBoxTextHoverColor = BtnActive;
export const selectBoxIconColor = BtnActive;
export const selectBoxOutlineColor = BtnActive;
export const selectBoxOutlineFocusColor = BtnTxt;
export const selectBoxOutlineHoverColor = Buttoncolor;

export const appBarBackColor = Buttoncolor;
export const appBarBackHoverColor = BackColor;
export const appBarTextColor = BtnActive;
export const appBarTextHoverColor = BtnActive;

// ------------for color------------

export function EcommerceContext({ children }) {
  // ---------------for darkTheme-------------

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fffff" //last color #fffff
      },
      mode: "dark"
    }
  });

  // ---------------for darkTheme-------------

  // ------------------for productList------------------

  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [singleProduct, setSingleProduct] = useState();

  const getProductList = async () => {
    setLoading(true);
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProductList(data);
    setLoading(false);
  };

  useEffect(() => {
    getProductList();
  }, []);

  console.log("productList " + productList);

  // ------------------for productList------------------

  // ------------------for singleProduct------------------

  // const getsingleProduct = async () => {
  //   setLoading(true);
  //   const { data } = await axios.get("https://fakestoreapi.com/products/1");
  //   setSingleProduct(data);
  //   setLoading(false);
  // };

  // ------------------for singleProduct------------------

  return (
    <EcommContext.Provider
      value={{
        darkTheme,
        siteLogoColor,
        siteBackColor,
        siteTextColor,
        linearProgressColor,
        circularProgressColor,
        paginationColor,
        buttonBorderColor,
        buttonBackColor,
        buttonTextColor,
        buttonBorderHoverColor,
        buttonBackHoverColor,
        buttonTextHoverColor,
        buttonBorderActiveColor,
        buttonBackActiveColor,
        buttonTextActiveColor,
        buttonBorderActiveHoverColor,
        buttonBackActiveHoverColor,
        buttonTextActiveHoverColor,
        authButtonBackColor,
        authButtonTextColor,
        authButtonBorderColor,
        authButtonBackHoverColor,
        authButtonTextHoverColor,
        authButtonBorderHoverColor,
        coinListGridBackColor,
        graphGridBackColor,
        graphGridBorderColor,
        graphLineBorderColor,
        currencySymbolColor,
        textFieldInputColor,
        textFieldLabelColor,
        textFieldBorderColor,
        textFieldBorderHoverColor,
        textFieldBorderFocusColor,
        selectBoxPopupBackColor,
        selectBoxPopupTextColor,
        selectBoxBackColor,
        selectBoxBackHoverColor,
        selectBoxTextColor,
        selectBoxTextHoverColor,
        selectBoxIconColor,
        selectBoxOutlineColor,
        selectBoxOutlineFocusColor,
        selectBoxOutlineHoverColor,
        appBarBackColor,
        appBarBackHoverColor,
        appBarTextColor,
        appBarTextHoverColor,
        productList,
        loading,
        setLoading
      }}
    >
      {children}
    </EcommContext.Provider>
  );
}

export const EcommState = () => {
  return useContext(EcommContext);
};
