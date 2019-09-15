// == Initial State
const initialState = {
  // === ProjectCreation props ===
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
  // === Subscribe props ===
  logged: true,
  email: '',
  password: '',
  passwordConfirmation: '',
  phoneNumber: 0,
};

// == Types
// === PROJECT CREATION ACTION TYPES ===
export const CHANGE_PROJECTNAME = 'CHANGE_PROJECTNAME';
export const CHANGE_STARTDATE = 'CHANGE_STARTDATE';
export const CHANGE_ENDDATE = 'CHANGE_ENDDATE';
export const CHANGE_PROJECTTYPE = 'CHANGE_PROJECTTYPE';
export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const CHANGE_SHORTDESCRIPTION = 'CHANGE_SHORTDESCRIPTION';
export const CHANGE_COLLABNUMBER = 'CHANGE_COLLABNUMBER';
export const CHANGE_FRONTTECHNOS = 'CHANGE_FRONTTECHNOS';
export const CHANGE_BACKTECHNOS = 'CHANGE_BACKTECHNOS';
export const CHANGE_SKILLS = 'CHANGE_SKILLS';
export const DO_SUBMIT = 'DO_SUBMIT';

// === SUBSCRIBE & LOGIN ACTION TYPES ===
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORDCONFIRM = 'CHANGE_PASSWORDCONFIRM';
export const CHANGE_PHONENUMBER = 'CHANGE_PHONENUMBER';
export const DO_SUBSCRIBE = 'DO_SUBSCRIBE';
export const DO_CONNECT = 'DO_CONNECT';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    /* === PROJECT CREATION ACTIONS === */
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
    case DO_SUBMIT:
      return {
        ...state,
      };
    /* === SUBSCRIBE & LOGIN ACTIONS === */
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.value,
      };
    case CHANGE_PASSWORDCONFIRM:
      return {
        ...state,
        passwordConfirmation: action.value,
      };
    case CHANGE_PHONENUMBER:
      return {
        ...state,
        phoneNumber: action.value,
      }; 
    case DO_SUBSCRIBE:
      return {
        ...state,
        logged: true,
      }; 
    case DO_CONNECT:
      return {
        ...state,
        logged: true,
      };    
    default:
      return state;
  }
};

// == Action Creators
// === PROJECT CREATION ACTION CREATORS ===
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

export const doSubmit = value => ({
  type: DO_SUBMIT,
});

// === SUBSCRIBE & LOGIN ACTION CREATORS ===

export const changeEmail = value => ({
  type: CHANGE_EMAIL,
  value,
});

export const changePassword = value => ({
  type: CHANGE_PASSWORD,
  value,
});

export const changePasswordConfirmation = value => ({
  type: CHANGE_PASSWORDCONFIRM,
  value,
});

export const changePhoneNumber = value => ({
  type: CHANGE_PHONENUMBER,
  value,
});

export const doSubscribe = () => ({
  type: DO_SUBSCRIBE,
});

export const doConnect = () => ({
  type: DO_CONNECT,
});
// == Selectors


// == Export
export default reducer;