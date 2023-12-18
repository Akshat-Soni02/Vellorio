import React from 'react'
import logo from "../../assets/Screenshot 2023-11-11 222117.png"
import "./style.css"
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react"
        

const CreatorProfileCreate = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(null);
    const languages = [
        { name: 'English', code: 'en' },
        { name: 'Hindi', code: 'hi' },
        { name: 'Spanish', code: 'es' },
        { name: 'French', code: 'fr' },
        { name: 'German', code: 'de' },
        { name: 'Gujarati', code: 'gu' },
        { name: 'Russian', code: 'ru' },
        { name: 'Korean', code: 'ko' },
        { name: 'Italian', code: 'it' },
        { name: 'Japanese', code: 'ja' }
    ];

    const selectedLanguageTemplate = (option, props) => {
      if (option) {
          return (
              <div className="flex align-items-center selectedL">
                  <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()} searchCustom`} style={{ width: '18px' }} />
                  <div>{option.name}</div>
              </div>
          );
      }

      return <span>{props.placeholder}</span>;
  };

  const languageOptionTemplate = (option) => {
    return (
        <div className="flex align-items-center opTemp">
            <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()} serachIco`} style={{ width: '18px' }} />
            <div>{option.name}</div>
        </div>
    );
};



  return (
    <>
    <section className="proInfo">
      <section className="cpHeader">
        <img src={logo} alt="Vellorio" />
      </section>
      <section className="progress">
        <ul className='prog_list custom-counter'>
          <li className='per'>
            {/* <span className="num">1</span> */}
            <IoCheckmarkDoneCircleSharp /> Personal Info
          </li>
          <li>&gt;</li>
          <li className='pro'>
            {/* <span className="num">2</span> */}
            Professinal Info
          </li>
        </ul>
      </section>
      <section className='cpDescribe'>
        <h2 className='cp-des-h'>Professional Info</h2>
        <p className='cp-des-p'>This is your time to shine. Let potential buyers know what you do best and how you gained you skills and experience.</p>
      </section>
      <section className="cpData">
          <form className='cpForm'>
            <div className="cpField">
            <label className='cpLabel' htmlFor="description">
              Description<span className="redDot">*</span>
            </label>
            <textarea className='cpInput desInput' rows={4} cols={5} name='description' id='description' placeholder="Share a bit about your work experience, cool projects you've completed etc."/>
            </div>
            <div className="cpField">
            <label className='cpLabel' htmlFor="laguages">
              Languages<span className="redDot">*</span>
            </label>
            <div className="card flex justify-content-center">
            <Dropdown value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.value)} options={languages} optionLabel="name" placeholder="Select a Language" 
                    filter valueTemplate={selectedLanguageTemplate} itemTemplate={languageOptionTemplate} className="w-full md:w-14rem cpInput lInput" />
            </div> 
            {/* <input className='cpInput lanInput' type="text" name='laguages' id='laguages'/> */}
            </div>
            <div className="cpField">
            <label className='cpLabel' htmlFor="education">
              Education<span className="redDot">*</span>
            </label>
            <input className='cpInput eduInput' type="text" name = "education" id='education'/>
            </div>
            <div className="cpField">
            <label className='cpLabel' htmlFor="skills">
              Skills<span className="redDot">*</span>
            </label>
            <input className='cpInput skillInput' type="text" name="skills" id="skills" />
            </div>
            <button className='cpButtonSubmit'>Continue</button>
          </form>
      </section>
      </section>
    </>   
  )
}

export default CreatorProfileCreate




// import React, { useState } from "react";
// import { Dropdown } from 'primereact/dropdown';

// export default function FilterDemo() {
    

    

    

//     return (
           
//     )
// }
        