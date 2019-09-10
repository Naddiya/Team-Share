// == Initial State
const initialState = {
  logged: false,
  projectName: '',
  startDate: 'DD/MM/YYYY',
  endDate: 'DD/MM/YYYY',
  projectType: '',
  shortDescription: '',
  description: '',
};

// == Types
const CHANGE_PROJECTNAME = 'CHANGE_PROJECTNAME';
const CHANGE_STARTDATE = 'CHANGE_STARTDATE';
const CHANGE_ENDDATE = 'CHANGE_ENDDATE';
const CHANGE_PROJECTTYPE = 'CHANGE_PROJECTTYPE';
const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
const CHANGE_SHORTDESCRIPTION = 'CHANGE_SHORTDESCRIPTION';

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
    case CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.value,
      };
    case CHANGE_SHORTDESCRIPTION:
      return {
        ...state,
        description: action.value,
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

export const changeDescription = value => ({
  type: CHANGE_DESCRIPTION,
  value,
});

export const changeShortDescription = value => ({
  type: CHANGE_SHORTDESCRIPTION,
  value,
});
// == Selectors


// == Export
export default reducer;
