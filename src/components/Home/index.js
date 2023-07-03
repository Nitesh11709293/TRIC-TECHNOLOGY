import React from "react";
import { HomePageText } from "./data";
import "./style.css";
import Display from "../Display";

import {
  AiOutlineRocket,
  AiOutlineSketch,
  AiOutlineRise,
  AiOutlineSend,
  AiOutlineMail,
  AiOutlineBlock,
  AiOutlineNotification,
  AiOutlineFileSearch,
  AiOutlineTeam,
  AiOutlineSync,
  AiOutlineFundView,
  AiOutlineProject,
} from "react-icons/ai";
import Services from "../Services"
import Projects from "../Projects";
import ConatctUs from "../ContactUs";

function Home({ }) {
  return (
    <div>
      <section>
        <Display />
        <div>
          <Services />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <ConatctUs />
        </div>

      </section>
    </div>
  );
}

export default Home;
