import React from "react";
import Section1 from "./components/section1/Section1";
 
const App = () => {
  const user = [
    {
      img: "  https://plus.unsplash.com/premium_photo-1661765358713-c2545023dbc8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNvcnBvcmF0ZXMlMjB3b3JraW5nfGVufDB8fDB8fHww",
      intro: "",
      tag: " Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661578733717-0e29066d7b41?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlcyUyMHdvcmtpbmclMjBzaGFkb3dlZHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1574296485283-05828992d106?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNvcnBvcmF0ZXMlMjB3b3JraW5nJTIwc2hhZG93ZWR8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1689579209518-5276c5fb1a2e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGNvcnBvcmF0ZXMlMjB3b3JraW5nJTIwc2hhZG93ZWR8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Leveled",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661540545542-22119f79ce90?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxjb3Jwb3JhdGVzJTIwd29ya2luZyUyMHNoYWRvd2VkfGVufDB8fDB8fHww",
      intro: "",
      tag: "Financed",
    },
  ];

  return (
    <div>
      <Section1 user = {user} />
    </div>
  );
};

export default App;
