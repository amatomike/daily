import {
  cyanA400, blueGrey100, lightBlue500,
  pinkA200, tealA100,
  grey900, white, grey400, darkBlack
} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'
import zIndex from 'material-ui/styles/zIndex'
// const cmmRed = '';
const cmmPrimary = '#792104';
const cmmAccent = 'rgba(4, 3, 5, 0.35)';
export default {
  spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cmmPrimary,
    primary2Color: cyanA400,
    primary3Color: blueGrey100,
    accent1Color: cmmAccent,
    accent2Color: tealA100,
    accent3Color: lightBlue500,
    textColor: grey900,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: pinkA200
  }
}
