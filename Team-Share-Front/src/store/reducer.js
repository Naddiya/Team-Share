// == Initial State
const initialState = {
  // === ProjectCreation props ===
  projectName: '',
  startDate: 'DD/MM/YYYY',
  endDate: 'DD/MM/YYYY',
  projectType: [''],
  shortDescription: '',
  description: '',
  collabNumber: 0,
  technos: [''],
  skills: [''],
  image: '',
  urlFacebook: '',
  urlTwitter: '',
  urlTipeee: '',
  urlGithub: '',
  // === Subscribe props ===
  email: '',
  password: '',
  passwordConfirmation: '',
  phoneNumber: '',
  token: '',
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
export const CHANGE_TECHNOS = 'CHANGE_TECHNOS';
export const CHANGE_SKILLS = 'CHANGE_SKILLS';
export const CHANGE_IMAGE = 'CHANGE_IMAGE';
export const CHANGE_URLFB = 'CHANGE_URLFB';
export const CHANGE_URLTWIT = 'CHANGE_URLTWIT';
export const CHANGE_URLTIP = 'CHANGE_URLTIP';
export const CHANGE_URLGIT = 'CHANGE_URLGIT';
export const DO_SUBMIT = 'DO_SUBMIT';

// === SUBSCRIBE & LOGIN ACTION TYPES ===
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORDCONFIRM = 'CHANGE_PASSWORDCONFIRM';
export const CHANGE_PHONENUMBER = 'CHANGE_PHONENUMBER';
export const CHANGE_TOKEN = 'CHANGE_TOKEN';
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
    case CHANGE_TECHNOS:
      return {
        ...state,
        technos: action.value,
      };
    case CHANGE_SKILLS:
      return {
        ...state,
        skills: action.value,
      };
    case CHANGE_IMAGE:
      return {
        ...state,
        image: action.value,
      };
    case CHANGE_URLFB:
      return {
        ...state,
        urlFacebook: action.value,
      };
    case CHANGE_URLTWIT:
      return {
        ...state,
        urlTwitter: action.value,
      };
    case CHANGE_URLTIP:
      return {
        ...state,
        urlTipee: action.value,
      };
    case CHANGE_URLGIT:
      return {
        ...state,
        urlGithub: action.value,
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
    case CHANGE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case DO_SUBSCRIBE:
      return {
        ...state,
      }; 
    case DO_CONNECT:
      return {
        ...state,
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

export const changeTechnos= value => ({
  type: CHANGE_TECHNOS,
  value,
});

export const changeSkills = value => ({
  type: CHANGE_SKILLS,
  value,
});

export const changeImage = value => ({
  type: CHANGE_IMAGE,
  value,
});

export const changeUrlFb = value => ({
  type: CHANGE_URLFB,
  value,
});

export const changeUrlTwit = value => ({
  type: CHANGE_URLTWIT,
  value,
});

export const changeUrlTip = value => ({
  type: CHANGE_URLTIP,
  value,
});

export const changeUrlGit = value => ({
  type: CHANGE_URLGIT,
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

export const changeToken = token => ({
  type: CHANGE_TOKEN,
  token: token,
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
