import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Search.css";

const Search = props => {
  const inputRef = React.createRef();
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=" + query,
          { cancelToken: source.token }
        );
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("request canceled");
        }
      }
    };

    fetchData();
    return () => {
      source.cancel();
    };
  }, [query]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  // useEffect(() => {
  //   const abortController = new AbortController();

  //   fetch("https://hn.algolia.com/api/v1/search?query=" + query, {
  //     method: "GET",
  //     mode: "cors",
  //     signal: abortController.signal
  //   })
  //     .then(res => res.json())
  //     .then(res => setData(res))
  //     .catch(error => console.log(error));

  //   return () => {
  //     abortController.abort();
  //   };
  // }, [query]);

  return (
    <div className="search-list">
      <input value={query} onChange={handleChange} ref={inputRef} />
      <ul>
        {data.hits.map(item => {
          return (
            item &&
            item.url && (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
