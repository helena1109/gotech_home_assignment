import React from "react";
import styled from "styled-components"
import MainPage from "./Pages/Main";
import {ThemeProvider} from 'styled-components';
import {theme} from "./Styles/theme";
import {GlobalStyle} from "./Styles/globalStyle";
import {Routes, Route, Navigate} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import NotFoundPage from "./Pages/NotFound";


function App() {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route path="" element={<Navigate to="/questionnaire/1"/>}/>
                        <Route path="/questionnaire/:id" element={<MainPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </AppContainer>
        </ThemeProvider>


    );
}


const AppContainer = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
`
export default App;
