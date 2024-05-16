import React from "react";
import logo from "../../../assets/vellorio-favicon-color.png";
import "./style.css";
import { CiCircleCheck } from "react-icons/ci";
import { useState } from "react";
import ava from "../../../assets/test.png";
import Select from "react-select";
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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { creatorRegRoute } from "../../../api/ApiRoutes.js";
import {
  login_creator,
  setLoading,
  resetLoading,
} from "../../../store/UserSlice.js";

const Test = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("des");
  const [formData, setFormData] = useState({
    description: "",
    languages: [],
    education: "",
    skills: [],
  });

  const handleSelectChange = (languages) => {
    setFormData({
      ...formData,
      languages: languages.map((option) => option.value),
    });
  };

  const handleSelectChange2 = (selectedOptions) => {
    const selectedSkills = [];
    selectedOptions.forEach((option) => {
      if (option.options) {
        option.options.forEach((opt) => selectedSkills.push(opt.value));
      } else {
        selectedSkills.push(option.value);
      }
    });
    setFormData({ ...formData, skills: selectedSkills });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setLoading());
    const userId = user._id;
    try {
      const { data } = await axios.post(
        `${creatorRegRoute}/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      dispatch(login_creator(formData));
      setTimeout(() => {
        navigate("/creator/dashboard");
      }, 1500);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(resetLoading());
    }
  };

  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center",
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
          <img src={logo} alt="Vellorio" className="left_proInfo_logo" />
          <div className="details_list">
            <ul className="details_list_ul">
              <li>
                <div
                  className={`details_list_div_outer ${
                    selectedSection === "des" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSection("des")}
                >
                  <div className="details_list_div_inner_left">
                    <CiCircleCheck className="details_list_div_inner_left_logo" />
                  </div>
                  <div className="details_list_div_inner_right">
                    <div className="details_1">Description</div>
                    <div className="details_2">Share about yourself</div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className={`details_list_div_outer ${
                    selectedSection === "lan" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSection("lan")}
                >
                  <div className="details_list_div_inner_left">
                    <CiCircleCheck className="details_list_div_inner_left_logo" />
                  </div>
                  <div className="details_list_div_inner_right">
                    <div className="details_1">Languages</div>
                    <div className="details_2">Select your languages</div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className={`details_list_div_outer ${
                    selectedSection === "edu" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSection("edu")}
                >
                  <div className="details_list_div_inner_left">
                    <CiCircleCheck className="details_list_div_inner_left_logo" />
                  </div>
                  <div className="details_list_div_inner_right">
                    <div className="details_1">Education</div>
                    <div className="details_2">
                      Please provide your education info
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className={`details_list_div_outer ${
                    selectedSection === "ski" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSection("ski")}
                >
                  <div className="details_list_div_inner_left">
                    <CiCircleCheck className="details_list_div_inner_left_logo" />
                  </div>
                  <div className="details_list_div_inner_right">
                    <div className="details_1">Skills</div>
                    <div className="details_2">
                      Please provide about your skills
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="save_creator">
            <button className="save_creator_bttn" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </section>
        <section className="right_proInfo">
          <div className="proPage_img">
            <img className="proPage_ava" src={ava} alt="" />
            <div className="proPage_name">Akshat Soni</div>
          </div>
          <div className="infoFill">
            <form className="infoFill_form" onSubmit={handleSubmit}>
              {selectedSection === "des" && (
                <div className="cpField">
                  <label className="cpLabel" htmlFor="description">
                    Description<span className="redDot">*</span>
                  </label>
                  <textarea
                    className="cpInput desInput"
                    rows={4}
                    cols={5}
                    name="description"
                    id="description"
                    required
                    placeholder="Share a bit about your work experience, cool projects you've completed etc."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
              )}
              {selectedSection === "lan" && (
                <div className="cpField">
                  <div className="lanInput">
                    <Select
                      // defaultValue={[colourOptions[0]]}
                      required
                      isMulti
                      name="languages"
                      options={colourOptions}
                      className="basic-multi-select custom_width_class"
                      classNamePrefix="select"
                      value={colourOptions.filter((option) =>
                        formData.languages.includes(option.value)
                      )} // Setting the selected options
                      onChange={handleSelectChange}
                    />
                  </div>
                </div>
              )}
              {selectedSection === "edu" && (
                <div className="cpField">
                  <label className="cpLabel" htmlFor="education">
                    Education<span className="redDot">*</span>
                  </label>
                  <textarea
                    className="cpInput desInput"
                    rows={4}
                    cols={5}
                    name="education"
                    id="education"
                    required
                    placeholder="Your highest level of education or related to work"
                    value={formData.education}
                    onChange={(e) =>
                      setFormData({ ...formData, education: e.target.value })
                    }
                  />
                </div>
              )}
              {selectedSection === "ski" && (
                <div className="ski_div">
                  <div className="cpField">
                    <Select
                      // defaultValue={technicalSkills[0]} // Defaulting to the first option for technical skills
                      options={groupedOptions}
                      formatGroupLabel={formatGroupLabel}
                      className="custom_width_class"
                      isMulti
                      required
                      value={groupedOptions.flatMap((group) =>
                        group.options.filter((option) =>
                          formData.skills.includes(option.value)
                        )
                      )} // Setting the selected options
                      onChange={handleSelectChange2}
                    />
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className="infoFocus">
            <div
              className={`line ${selectedSection === "des" ? "big_line" : ""}`}
            ></div>
            <div
              className={`line ${selectedSection === "lan" ? "big_line" : ""}`}
            ></div>
            <div
              className={`line ${selectedSection === "edu" ? "big_line" : ""}`}
            ></div>
            <div
              className={`line ${selectedSection === "ski" ? "big_line" : ""}`}
            ></div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Test;
