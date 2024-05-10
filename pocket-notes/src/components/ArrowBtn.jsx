// one of the requirement to have disabled button when there is
// no text in text area, when text is present function invoked to change its color
// and also to turndown disabled ability of send button.
import React from "react";

export default function SendBtn({ disabled = true }) {
  return (
    <svg
      width="35"
      height="29"
      viewBox="0 0 35 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
        fill={disabled ? "#ABABAB" : "#001F8B"}
      />
    </svg>
  );
}
