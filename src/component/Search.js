import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = props => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");

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
      source.cancel("cancel the request!");
    };
  }, [query]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      <ul>
        {data.hits.map(item => {
          return (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
