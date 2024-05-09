export interface TechnicalSkillOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const technicalSkills: readonly TechnicalSkillOption[] = [
    { value: 'programming', label: 'Programming' },
    { value: 'web_dev', label: 'Web Development' },
    { value: 'database_mgmt', label: 'Database Management' },
    { value: 'network_admin', label: 'Network Administration' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'sys_admin', label: 'System Administration' },
    { value: 'cloud_computing', label: 'Cloud Computing' },
    { value: 'data_analysis', label: 'Data Analysis and Visualization' },
    { value: 'machine_learning', label: 'Machine Learning and AI' },
    { value: 'mobile_dev', label: 'Mobile Development' },
  ];
  
  export interface SoftSkillOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const softSkills: readonly SoftSkillOption[] = [
    { value: 'communication', label: 'Communication' },
    { value: 'teamwork', label: 'Teamwork and Collaboration' },
    { value: 'problem_solving', label: 'Problem Solving' },
    { value: 'critical_thinking', label: 'Critical Thinking' },
    { value: 'time_management', label: 'Time Management' },
    { value: 'adaptability', label: 'Adaptability' },
    { value: 'creativity', label: 'Creativity' },
    { value: 'emotional_intelligence', label: 'Emotional Intelligence' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'conflict_resolution', label: 'Conflict Resolution' },
  ];
  
  export interface BusinessSkillOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const businessSkills: readonly BusinessSkillOption[] = [
    { value: 'project_management', label: 'Project Management' },
    { value: 'strategic_planning', label: 'Strategic Planning' },
    { value: 'financial_literacy', label: 'Financial Literacy' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'customer_service', label: 'Customer Service' },
    { value: 'negotiation', label: 'Negotiation' },
    { value: 'business_development', label: 'Business Development' },
    { value: 'entrepreneurship', label: 'Entrepreneurship' },
    { value: 'market_research', label: 'Market Research' },
  ];
  
  export interface CreativeSkillOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const creativeSkills: readonly CreativeSkillOption[] = [
    { value: 'graphic_design', label: 'Graphic Design' },
    { value: 'ui_ux_design', label: 'UI/UX Design' },
    { value: 'photography', label: 'Photography' },
    { value: 'video_editing', label: 'Video Editing' },
    { value: 'animation', label: 'Animation' },
    { value: 'illustration', label: 'Illustration' },
    { value: 'writing', label: 'Writing (Creative Writing, Copywriting)' },
    { value: 'music_composition', label: 'Music Composition' },
    { value: 'game_design', label: 'Game Design' },
    { value: 'fashion_design', label: 'Fashion Design' },
  ];
  
  export interface GroupedOption {
    readonly label: string;
    readonly options: readonly (TechnicalSkillOption | SoftSkillOption | BusinessSkillOption | CreativeSkillOption)[];
  }
  
  export const groupedOptions: readonly GroupedOption[] = [
    {
      label: 'Technical Skills',
      options: technicalSkills,
    },
    {
      label: 'Soft Skills',
      options: softSkills,
    },
    {
      label: 'Business Skills',
      options: businessSkills,
    },
    {
      label: 'Creative Skills',
      options: creativeSkills,
    },
  ];
  