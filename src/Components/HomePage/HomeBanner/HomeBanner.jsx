import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// let useClickOutside = (handler) => {
//   let domNode = useRef();

//   useEffect(() => {
//     let maybeHandler = (event) => {
//       if (!domNode.current.contains(event.target)) {
//         handler();
//       }
//     };

//     document.addEventListener("mousedown", maybeHandler);

//     return () => {
//       document.removeEventListener("mousedown", maybeHandler);
//     };
//   });

//   return domNode;
// };
export default function HomeBanner() {
  const [isOpen, setIsOpen] = useState(false);
  let boxRef = useRef();
  
  useEffect(() => {
    let handler = (e) => {
      if (!boxRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  // let domNode = useClickOutside(() => {
  //   setIsOpen(false);
  // });
  return (
    <div className="container-home-banner">
       {/* <div className="content-banner-top">
        <h1 className="header-content-banner-top">
          Việc làm cho ứng viên chuyên nghiệp
        </h1>
        <div className="search-banner search-inside" ref={domNode}>
          <AiOutlineSearch className="search-icon-banner"></AiOutlineSearch>
          <input
            className="input-search-banner"
            placeholder="nhập tên công việc, từ khóa"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          ></input>
          {isOpen && <div className="result-search"></div>}
        </div>
      </div> */}
    <div className="home-banner">
      {/* <div className="content-banner content-banner-inside">
        <h1 className="header-content-banner">
          Việc làm cho ứng viên chuyên nghiệp
        </h1>
        <div className="search-banner search-inside" ref={domNode}>
          <AiOutlineSearch className="search-icon-banner"></AiOutlineSearch>
          <input
            className="input-search-banner"
            placeholder="nhập tên công việc, từ khóa"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          ></input>
          {isOpen && <div className="result-search"></div>}
        </div>
      </div> */}
    </div>
    </div>
  );
}
