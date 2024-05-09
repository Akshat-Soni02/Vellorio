import React, { CSSProperties } from 'react';

import Select from 'react-select';
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

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles: CSSProperties = {
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

const formatGroupLabel = (data: GroupedOption) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default () => (
  <Select<TechnicalSkillOption | SoftSkillOption | BusinessSkillOption | CreativeSkillOption, true, GroupedOption>
    defaultValue={technicalSkills[0]} // Defaulting to the first option for technical skills
    options={groupedOptions}
    formatGroupLabel={formatGroupLabel}
    className='custom_width_class'
    isMulti
    value={colourOptions.filter(option => languages.includes(option.value))} // Setting the selected options
    onChange={handleSelectChange}
  />
);