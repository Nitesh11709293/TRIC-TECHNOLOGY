import React from 'react'
import { ServicesText } from "./data";
import {
  AiOutlineNotification,
  AiOutlineFileSearch,
  AiOutlineTeam,
  AiOutlineSync,
  AiOutlineFundView,
  AiOutlineProject,
} from "react-icons/ai";

import { TfiPalette } from "react-icons/tfi";
import { GrLanguage } from "react-icons/gr";
import { CiGlobe } from "react-icons/ci";
import { GiDarkSquad } from "react-icons/gi";
import './style.css';


export default function Services() {
  return (
    <div className='serviceshome' style={{ backgroundColor: "whitesmoke" }}>
      <div className="container">
        <div className="servicesheader">
          <h6>{ServicesText.serviceshome_subheader}</h6>
          <h4>{ServicesText.serviceshome_header}</h4>
          <p className='pCss'>{ServicesText.serviceshome_subheader1}</p>
        </div>
        <div className="row " style={{ marginRight: "-60px", marginLeft: "2vw" }}>
          <div className=" col-lg-4 col-md-4 col-6">
            <div className="services-box-home m-3 parent" >
              <div className='child'>
                <AiOutlineNotification className="icon1" />
              </div>
              <h4>{ServicesText.services_box_title1}</h4>
              <p className='pCss'>{ServicesText.social_marketing_description}</p>
            </div>
          </div>

          <div className=" col-lg-4 col-md-4 col-6">
            <div className="services-box-home m-3 parent">
              <div className='child'>
                <AiOutlineFundView className="icon2" />
              </div>
              <h4>{ServicesText.services_box_title2}</h4>
              <p className='pCss'>{ServicesText.content_writing_description}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-6">
            <div className="services-box-home m-3 parent">
              <div className='child'>
                <CiGlobe className="icon1" />
              </div>
              <h4>{ServicesText.services_box_title3}</h4>
              <p className='pCss'>{ServicesText.web_development_description}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-6">
            <div className="services-box-home m-3 parent">
              <div className='child'>
                <AiOutlineSync className="icon1" />
              </div>
              <h4>{ServicesText.services_box_title6}</h4>
              <p className='pCss'>{ServicesText.competitor_research_description}</p>
            </div>
          </div>


          <div className="col-lg-4 col-md-4 col-6">
            <div className="services-box-home m-3 parent">
              <div className='child'>
                <GiDarkSquad className="icon2" />
              </div>
              <h4>{ServicesText.services_box_title4}</h4>
              <p className='pCss'>{ServicesText.digital_marketing_description}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-6">
            <div className="services-box-home m-3 parent">
              <div className='child'>
                <TfiPalette className="icon1" />
              </div>
              <h4>{ServicesText.services_box_title5}</h4>
              <p className='pCss'>{ServicesText.graphic_designing_description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


