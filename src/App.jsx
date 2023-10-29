import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'

import {Header, Footer} from './sections/index'
import {Container} from './components/index'

import {Home, Profile, Browse} from './Pages/index'

const App = ()=>{
    return(
        <>
            <Router>
                <Header/>
                <Container>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/browse' element={<Browse/>}/>
                        <Route path='/profile' element={<Profile/>}/>

                        <Route path='*' element={<Navigate to="/" />} />
                    </Routes>
                </Container>
                <Footer/>
            </Router>
        </>
    );
}


export default App