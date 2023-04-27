import Header from "./LandingPage/Header";
import Footer from "./LandingPage/Footer";
import About from "./LandingPage/About";
import Resume from "./LandingPage/Resume";
import Contact from "./LandingPage/Contact";
import Portfolio from "./LandingPage/Portfolio";
import $ from "jquery";
import React, { useState, useEffect } from 'react';

export default function LandingPageNew() {

  const [state, setState] = useState();

  const getData = () => {
    fetch('./resumeData.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setState(myJson)
      });
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div>
      <Header data={state?.main} />
      <About data={state?.main} />
      <Resume data={state?.resume} />
      <Portfolio data={state?.portfolio} />
      <Contact data={state?.main} />
      <Footer data={state?.main} />
    </div>
  );

}