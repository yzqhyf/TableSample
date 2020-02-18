import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = props => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=" + query
      );
      setData(response.data);
    };

    fetchData();

    return () => {};
  }, [query]);
};
