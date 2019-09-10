// == Initial State
const initialState = {
  logged: false,
  projectName: '',
  startDate: 'DD/MM/YYYY',
  endDate: 'DD/MM/YYYY',
  projectType: '',
  shortDescription: '',
  description: '',
  collabNumber: 0,
  frontTechnos: '',
  backTechnos: '',
  skills: '',
};

// == Types
const CHANGE_PROJECTNAME = 'CHANGE_PROJECTNAME';
const CHANGE_STARTDATE = 'CHANGE_STARTDATE';
const CHANGE_ENDDATE = 'CHANGE_ENDDATE';
const CHANGE_PROJECTTYPE = 'CHANGE_PROJECTTYPE';
const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
const CHANGE_SHORTDESCRIPTION = 'CHANGE_SHORTDESCRIPTION';
const CHANGE_COLLABNUMBER = 'CHANGE_COLLABNUMBER';
const CHANGE_FRONTTECHNOS = 'CHANGE_FRONTTECHNOS';
const CHANGE_BACKTECHNOS = 'CHANGE_BACKTECHNOS';
const CHANGE_SKILLS = 'CHANGE_SKILLS';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROJECTNAME:
      return {
        ...state,
        projectName: action.value,
      };
    case CHANGE_STARTDATE:
      return {
        ...state,
        startDate: action.value,
      };
    case CHANGE_ENDDATE:
      return {
        ...state,
        endDate: action.value,
      };
    case CHANGE_PROJECTTYPE:
      return {
        ...state,
        projectType: action.value,
      };
    case CHANGE_COLLABNUMBER:
      return {
        ...state,
        collabNumber: action.value,
      };
    case CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.value,
      };
    case CHANGE_SHORTDESCRIPTION:
      return {
        ...state,
        shortDescription: action.value,
      };
    case CHANGE_FRONTTECHNOS:
      return {
        ...state,
        frontTechnos: action.value,
      };
      case CHANGE_BACKTECHNOS:
      return {
        ...state,
        backTechnos: action.value,
      };
    case CHANGE_SKILLS:
      return {
        ...state,
        skills: action.value,
      };
    default:
      return state;
  }
};

// == Action Creators
export const changeProjectName = value => ({
  type: CHANGE_PROJECTNAME,
  value,
});

export const changeStartDate = value => ({
  type: CHANGE_STARTDATE,
  value,
});

export const changeEndDate = value => ({
  type: CHANGE_ENDDATE,
  value,
});

export const changeProjectType = value => ({
  type: CHANGE_PROJECTTYPE,
  value,
});

export const changeCollabNumber = value => ({
  type: CHANGE_COLLABNUMBER,
  value,
});

export const changeDescription = value => ({
  type: CHANGE_DESCRIPTION,
  value,
});

export const changeShortDescription = value => ({
  type: CHANGE_SHORTDESCRIPTION,
  value,
});

export const changeFrontTechnos= value => ({
  type: CHANGE_FRONTTECHNOS,
  value,
});

export const changeBackTechnos = value => ({
  type: CHANGE_BACKTECHNOS,
  value,
});

export const changeSkills = value => ({
  type: CHANGE_SKILLS,
  value,
});
// == Selectors


// == Export
export default reducer;
