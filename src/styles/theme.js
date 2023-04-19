// 반응형 디자인 중단점
const breakpoints = {
  small: "576px",
  medium: "768px",
  large: "1048px",
};

const device = {
  mobile: `only screen and (max-width: ${breakpoints.small})`,
  tablet: `only screen and (max-width: ${breakpoints.medium})`,
  desktop: `only screen and (max-width: ${breakpoints.large})`,
};

// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 10}rem`;

const fontSizes = {
  xl: pixelToRem(21),
  lg: pixelToRem(18),
  base: pixelToRem(16),
  sm: pixelToRem(14),
};

const colors = {
  background: "#F5F7F9",
  field: "#fff",
  button: "#1e1e1e",
  text: "#222",
  buttontext: "#eee",
  greytext: "#bbb",
  primary: "#ff4826",
  secondary: "#fee1dc",
  error: "#ff4048",
  caution: "#ffee58",
  sucsses: "#69f0ae",
};

//   {
//     background: "#1e1e1e",
//   }

const common = {
  a11yHidden: `
    overflow: hidden;
    position: absolute;
    clip:     rect(0 0 0 0); /* IE 6,7 */
    clip:     rect(0,0,0,0);
    width:    1px;
    height:   1px;
    margin:   -1px;
    border:   0;
    padding:  0;
  `,
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
  device,
  colors,
  fontSizes,
  common,
};

export default theme;
