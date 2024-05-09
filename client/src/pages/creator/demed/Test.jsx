import React from 'react'
import logo from "../../../assets/vellorio-favicon-color.png"
import "./style.css"
import { CiCircleCheck } from "react-icons/ci";
import { useState } from "react"
import ava from '../../../assets/test.png';
import Select from 'react-select';
import { colourOptions } from "./data.ts";
import {
    TechnicalSkillOption,
    technicalSkills,
    SoftSkillOption,
    softSkills,
    BusinessSkillOption,
    businessSkills,
    CreativeSkillOption,
    creativeSkills,
    GroupedOption,
    groupedOptions,
  } from "./data1.ts";

        

const Test = () => {
  const [selectedSection, setSelectedSection] = useState("des");
  const [description, setDescription] = useState("");
  const [languages,setLanguages] = useState([]);
  const [education,setEducation] = useState("");
  const [skills,setSkills] = useState([]);

  const handleSelectChange = (languages) => {
    setLanguages(languages.map(option => option.value)); // Extracting values from selected options
    console.log("languages:", languages);
};

const handleSelectChange2 = (selectedOptions) => {
    if (!selectedOptions) {
        // If no options are selected, set languages state to an empty array
        setSkills([]);
        return;
    }

    // Extract values from selected options
    const selectedSkills = [];
    selectedOptions.forEach(option => {
        if (option.options) {
            option.options.forEach(opt => selectedSkills.push(opt.value));
        } else {
            selectedSkills.push(option.value);
        }
    });

    // Update the languages state with the values of the selected options
    setSkills(selectedSkills);

    // Handle the change event here
    console.log("Selected options:", selectedOptions);
    // You can perform any further actions you need with the selected options
};





  function Sectiondes() {
    return <div>
        <form className="infoFill_form" onSubmit={handleSubmit}>
            <div className="cpField">
                <label className='cpLabel' htmlFor="description">
                Description<span className="redDot">*</span>
                </label>
                <textarea className='cpInput desInput' rows={4} cols={5} name='description' id='description' placeholder="Share a bit about your work experience, cool projects you've completed etc."
                onChange={(e) => setDescription(e.target.value)}/>
            </div>
        </form>
    </div>;
  }

  function Sectionlan() {
    return <div>
        <form className='infoFill_form' onSubmit={handleSubmit}>
            <div className="cpField">
                <div className="lanInput">
                    <Select
                        defaultValue={[colourOptions[0]]}
                        isMulti
                        name="languages"
                        options={colourOptions}
                        className="basic-multi-select custom_width_class"
                        classNamePrefix="select"
                        value={colourOptions.filter(option => languages.includes(option.value))} // Setting the selected options
                        onChange={handleSelectChange}
                    />
                </div> 
            </div>
        </form>
    </div>;
  }

  function Sectionedu() {
    return <div>
        <form className="infoFill_form" onSubmit={handleSubmit}>
            <div className="cpField">
                <label className='cpLabel' htmlFor="education">
                Education<span className="redDot">*</span>
                </label>
                <textarea className='cpInput desInput' rows={4} cols={5} name='education' id='education' placeholder="Your highest level of education or related to work"
                onChange={(e) => setEducation(e.target.value)}/>
            </div>
        </form>
    </div>;
  }

  function Sectionski() {
    return <div className='ski_div'>
            <div className="cpField">
                <Select
                    defaultValue={technicalSkills[0]} // Defaulting to the first option for technical skills
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                    className='custom_width_class'
                    isMulti
                    value={groupedOptions.flatMap(group => group.options.filter(option => skills.includes(option.value)))} // Setting the selected options
                    onChange={handleSelectChange2}
                />
                {/* <input className='cpInput skillInput' type="text" name="skills" id="skills" /> */}
            </div>
    </div>;
  }


  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
  
  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );



  return (
    <>
    <section className="proInfo">
      <section className="left_proInfo">
        <img src={logo} alt="Vellorio" className="left_proInfo_logo"/>
        <div className="details_list">
            <ul className='details_list_ul'>
                <li>
                    <div className={`details_list_div_outer ${selectedSection === 'des' ? 'selected' : ''}`} onClick={() => setSelectedSection("des")}>
                        <div className="details_list_div_inner_left">
                            <CiCircleCheck className="details_list_div_inner_left_logo"/>
                        </div>
                        <div className="details_list_div_inner_right">
                            <div className="details_1">Description</div>
                            <div className="details_2">Share about yourself</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={`details_list_div_outer ${selectedSection === 'lan' ? 'selected' : ''}`} onClick={() => setSelectedSection("lan")}>
                        <div className="details_list_div_inner_left">
                            <CiCircleCheck className="details_list_div_inner_left_logo"/>
                        </div>
                        <div className="details_list_div_inner_right">
                            <div className="details_1">Languages</div>
                            <div className="details_2">Select your languages</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={`details_list_div_outer ${selectedSection === 'edu' ? 'selected' : ''}`} onClick={() => setSelectedSection("edu")}>
                        <div className="details_list_div_inner_left">
                            <CiCircleCheck className="details_list_div_inner_left_logo"/>
                        </div>
                        <div className="details_list_div_inner_right">
                            <div className="details_1">Education</div>
                            <div className="details_2">Please provide your education info</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={`details_list_div_outer ${selectedSection === 'ski' ? 'selected' : ''}`} onClick={() => setSelectedSection("ski")}>
                        <div className="details_list_div_inner_left">
                            <CiCircleCheck className="details_list_div_inner_left_logo"/>
                        </div>
                        <div className="details_list_div_inner_right">
                            <div className="details_1">Skills</div>
                            <div className="details_2">Please provide about your skills</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="save_creator">
            <button className="save_creator_bttn">Save</button>
        </div>
      </section>
      <section className="right_proInfo">
        <div className="proPage_img">
            <img className='proPage_ava' src={ava} alt=''/>
            <div className="proPage_name">Akshat Soni</div>
        </div>
        <div className="infoFill">
            {selectedSection === "des" && <Sectiondes />}
            {selectedSection === "lan" && <Sectionlan />}
            {selectedSection === "edu" && <Sectionedu />}
            {selectedSection === "ski" && <Sectionski />}
        </div>
        <div className="infoFocus">
            <div className={`line ${selectedSection === 'des' ? 'big_line' : ''}`}></div>
            <div className={`line ${selectedSection === 'lan' ? 'big_line' : ''}`}></div>
            <div className={`line ${selectedSection === 'edu' ? 'big_line' : ''}`}></div>
            <div className={`line ${selectedSection === 'ski' ? 'big_line' : ''}`}></div>
        </div>
      </section>
    </section>
    </>   
  )
}

export default Test