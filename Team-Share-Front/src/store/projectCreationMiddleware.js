import { CHANGE_PROJECTNAME } from 'src/store/reducer';
import { CHANGE_STARTDATE } from 'src/store/reducer';
import { CHANGE_ENDDATE } from 'src/store/reducer';
import { CHANGE_PROJECTTYPE } from 'src/store/reducer';
import { CHANGE_DESCRIPTION } from 'src/store/reducer';
import { CHANGE_SHORTDESCRIPTION } from 'src/store/reducer';
import { CHANGE_COLLABNUMBER } from 'src/store/reducer';
import { CHANGE_FRONTTECHNOS } from 'src/store/reducer';
import { CHANGE_BACKTECHNOS } from 'src/store/reducer';
import { CHANGE_SKILLS } from 'src/store/reducer';

const projectCreationMiddleware = store => next => (action) => {
  next(action);
};

export default projectCreationMiddleware;
