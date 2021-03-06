import React, { Fragment, useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
const width = "40vw";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.35),
    },
    marginLeft: "auto",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      margin: "auto",
      width: "auto",
    },
    cursor: "pointer",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 300,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    fontFamily: "'Poppins', sans-serif !important",
  },
}));
const Search = ({ placeholder, suggestions, value, onChangeSearchHandler }) => {
  const classes = useStyles();
  const [isSuggestionsBoxOpen, setSuggestionsBoxOpen] = useState(false);
  useEffect(() => {
    if (value !== "") {
      setSuggestionsBoxOpen(true);
    } else {
      setSuggestionsBoxOpen(false);
    }
  }, [value]);
  return (
    <Fragment>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder={placeholder}
          onChange={onChangeSearchHandler}
          value={value}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
        {suggestions(width, isSuggestionsBoxOpen)}
      </div>
    </Fragment>
  );
};

export default Search;
