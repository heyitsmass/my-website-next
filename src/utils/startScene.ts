import React from "react";

const getScene = async (url: string) => {
  return fetch(url)
    .then((res) => res.arrayBuffer())
    .then((blob) => blob);
};

export default React.cache(getScene);
