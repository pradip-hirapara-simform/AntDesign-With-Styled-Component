 
export const getColor = (themeColor) => ({
    primary: themeColor.Primary, 
    primarycolor2: themeColor.PrimaryColor_2, 
    primarycolor3: themeColor.PrimaryColor_3, 
    secondary: themeColor.Secondary,
});

export const getAntTheme = (themeColor) => ({
  controlHeightSX: 30,
  controlHeightSM: 40,
  controlHeightLG: 50,
  fontSize: 16,
  fontFamily: "Roboto",
  borderRadius: 8,
  buttonPaddingHorizontal: 40,
  paddingContentHorizontal: 20,
  paddingXS:40,  

});
export const Components = (themeColor) => (  {
    Button: {
        sizeStep: 10,
        controlPaddingHorizontal: 40, 
        paddingContentHorizontal:20, 
        controlPaddingHorizontalSM: 20,
        paddingContentVertical: 40, 
        colorBorder: themeColor.Primary,
        colorBgTextHover: themeColor.Secondary,
        colorText: themeColor.Primary,
        colorBgTextActive: themeColor.Secondary,
        controlHeight: 40,
        controlHeightSM: 30,
        colorPrimary: themeColor.Primary, 
        colorPrimaryBg: themeColor.Primary, 
        colorBorderSecondary: themeColor.Secondary, 
        colorPrimaryText: themeColor.Primary, 
        colorPrimaryBgHover: themeColor.Primary, 
        paddingXS:20,
    }, 
    Input: {
    colorBorder: '#f10',
    inputBorderHoverColor:'green',
    colorPrimaryHover: 'gold',
    controlHeight: 40,
    }
});
