import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { PageNotFoundContainer } from "./pageNotFound";

const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      <SentimentVeryDissatisfiedIcon />
      <Typography variant="h3" component="h1">
        Page not found
      </Typography>
      <Typography variant="h5" component="h5">
        Redirect to Login page <Link to="/login"> Click here! </Link>
      </Typography>
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
