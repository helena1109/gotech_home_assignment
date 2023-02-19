import React from "react";
import {Grid, Tooltip} from "@mui/material";
import {Link} from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styled from "styled-components";

const Pagination = ({pagination}) => {
    return (
        <Wrapper>
            <Grid container justifyContent="space-between">
                <Grid item xs={1}>
                    {
                        pagination.prev &&
                        <Tooltip title={"Previous questionnaire"}>
                            <Link to={`/questionnaire/${pagination.prev}`}>
                                <NavigateBeforeIcon/>
                            </Link>
                        </Tooltip>
                    }
                </Grid>
                <Grid item xs={1}>
                    {
                        pagination.next &&
                        <Tooltip title={"One more questionnaire"}>
                            <Link to={`/questionnaire/${pagination.next}`}>
                                <NavigateNextIcon/>
                            </Link>
                        </Tooltip>
                    }
                </Grid>
            </Grid>
        </Wrapper>
    )

}

const Wrapper = styled.div`
  padding: 15px 5px;

  svg {
    cursor: pointer;
    font-size: 60px;
    color: white;

    &:hover {
      color: ${({theme}) => theme.color.primary};
    }
  }
`


export default Pagination;