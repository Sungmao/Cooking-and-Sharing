import React from 'react'

import { Container } from 'react-grid-system'

// --------------Setup for Material-Ui -----------------------------
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
// -----------------------------------------------------------------

import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

export default class Main extends React.Component {

  render() {

    const style = {
      background: "rgb(246,245,246)"
    }

    // return (
    //   <MuiThemeProvider>
    //     <div>
    //       <NavBar />
    //       <Container>
    //         {this.props.children}
    //       </Container>
    //     </div>
    //   </MuiThemeProvider>
    // );
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <div style={style}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
