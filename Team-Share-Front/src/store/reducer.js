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
  urlLinkedin: '',
  // === Subscribe props ===
  email: '',
  password: '',
  passwordConfirmation: '',
  phoneNumber: '',
  token: '',
  // === ProfileUpdate props === 
  firstName: '',
  lastName: '',
  job: '',
  city: '',
  photo: '',

  // === Projects props === 
  inputFilter:'',
  loading: false,
  filteredProjects: [''],


  // projects: projectsData.items,
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
export const CHANGE_URLLINK = 'CHANGE_URLLINK';
export const DO_SUBMIT = 'DO_SUBMIT';

// === SUBSCRIBE & LOGIN ACTION TYPES ===
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORDCONFIRM = 'CHANGE_PASSWORDCONFIRM';
export const CHANGE_PHONENUMBER = 'CHANGE_PHONENUMBER';
export const CHANGE_TOKEN = 'CHANGE_TOKEN';
export const DO_SUBSCRIBE = 'DO_SUBSCRIBE';
export const DO_CONNECT = 'DO_CONNECT';

export const DO_DISCONNECT = 'DO_DISCONNECT';

// === UPDATEMODAL ACTION TYPES ===

export const CHANGE_FIRSTNAME = 'CHANGE_FIRSTNAME';
export const CHANGE_LASTNAME = 'CHANGE_LASTNAME';
export const CHANGE_JOB = 'CHANGE_JOB';
export const CHANGE_CITY = 'CHANGE_CITY';
export const DO_UPDATE = 'DO_UPDATE';

// === PROFIILE ACTION TYPES ===

export const GIVE_PROFILEINFOS = 'GIVE_PROFILEINFOS';

// === PROJECT FILTER ACTION TYPES ===

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const DO_FILTER = 'DO_FILTER';
export const SUBMIT_FILTER_SELECTION = 'SUBMIT_FILTER_SELECTION';


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
    case CHANGE_URLLINK:
      return {
        ...state,
        urlLinkedin: action.value,
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

    case DO_DISCONNECT:
      return {
        ...state,
      };
    /* === UPDATEMODAL ACTIONS === */
    case CHANGE_FIRSTNAME:
      return {
        ...state,
        firstName: action.value,
    };
    case CHANGE_LASTNAME:
      return {
        ...state,
        lastName: action.value,
    };
    case CHANGE_JOB:
      return {
        ...state,
        job: action.value,
    };
    case CHANGE_CITY:
      return {
        ...state,
        city: action.value,
      };
    case DO_UPDATE:
      return {
        ...state,
    };
    /* === PROFILE ACTIONS */
    case GIVE_PROFILEINFOS:
      return {
        ...state,
        description: action.value.description,
        urlFacebook: action.value.urlFacebook,
        urlTwitter: action.value.urlTwitter,
        urlGithub: action.value.urlGithub,
        urlLinkedin: action.value.urlLinkedin,
        email: action.value.mail,
        password: action.value.password,
        phoneNumber: action.value.phone,
        firstName: action.value.firstname,
        lastName: action.value.lastname,
        job: action.value.jobTitle,
        city: action.value.city,
        photo: action.value.photo,
        skills: action.value.skills,
        technos: action.value.technos,
      };
      /* === Projects Filter ACTIONS === */
      case CHANGE_FILTER:
        return {
          ...state, 
          inputFilter: action.value,
        }
      case DO_FILTER:
        return {
          ...state,
          filteredProjects: action.value,
        }
      case SUBMIT_FILTER_SELECTION:
        return {
          ...state,
          submitSelection: action.value,
        }


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

export const changeUrlLink = value => ({
  type: CHANGE_URLLINK,
  value,
});

export const doSubmit = () => ({
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

export const doDisconnect = () => ({
  type: DO_DISCONNECT,
});

// === UPDATEMODAL ACTION CREATORS ===

export const changeFirstName = value => ({
  type: CHANGE_FIRSTNAME,
  value,
});

export const changeLastName = value => ({
  type: CHANGE_LASTNAME,
  value,
});

export const changeJob = value => ({
  type: CHANGE_JOB,
  value,
});

export const changeCity = value => ({
  type: CHANGE_CITY,
  value,
});

export const doUpdate = () => ({
  type: DO_UPDATE,
});

export const giveProfileInfos = value => ({
  type: GIVE_PROFILEINFOS,
  value,
});

// === SUBSCRIBE & LOGIN ACTION CREATORS ===

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  value,
})

export const doFilter = value => ({
  type: DO_FILTER,
  value,
})

export const submitFilter = value => ({
  type: SUBMIT_FILTER_SELECTION,
  value,
})

// == Selectors
// export const getArt = tag =>
// tag.filter(tag => tag.name === 'Art');


// export const getFilterdList = (tag) => {

//   const artList = getArt(tag);
//   const filteredList = [
//     ...artList,
//   ];
//   return filteredList;
// };

// == Export
export default reducer;
