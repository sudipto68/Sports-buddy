import React from "react";

const SocialIcon = (props) => {
  return (
    <div>
      <props.icon
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "100%",
          color: "white",
          marginLeft: "20px",
        }}
      />
    </div>
  );
};

export default SocialIcon;
