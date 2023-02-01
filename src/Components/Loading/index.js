import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Loading = ({ loading, color, size }) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loading;
