import React from "react";
import styled from "styled-components";
import {Outlet} from 'react-router-dom'
import TopBlock from "../Components/TopBlock";
import {Grid} from "@mui/material";



const MainLayout=()=>{
    return(
            <Wrapper>
                <Grid container justifyContent="center">
                    <Grid item xs={10} md={6} >
                        <TopBlock/>
                        <Outlet/>
                    </Grid>
                </Grid>
            </Wrapper>
        )
}


const Wrapper =styled.div`
    width: 100%;
  
`

export default MainLayout