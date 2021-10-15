import React from 'react'

//Global Style
import GlobalStyle from './components/GlobalStyle'

//Roteamento
import { Route, Switch} from 'react-router-dom'

//icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

//Components
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './components/PortfolioDetail'
import ContacteMe from './pages/ContactMe'
import Nav from './components/Nav'
/*
  const leDados = ( ) => {
    fetch ('/api')
    .then(resultado =>{
      console.log('dados do baackend', resultado)
    })
  }*/
  function App() {
    
    library.add(fab, fas)

    return (
      <div>
      <GlobalStyle />
      <Nav />
      
        <Switch >
          <Route  exact path="/">
              <AboutUs />
           </Route> 
           <Route path="/portfolio" exact>
              <Portfolio />
           </Route> 
           <Route path="/portfolio/:id">
              <PortfolioDetail />
           </Route> 

           <Route path="/contactme">
              <ContacteMe />
           </Route> 
        </Switch>
     
        
      </div>
    );
  }

export default App;
