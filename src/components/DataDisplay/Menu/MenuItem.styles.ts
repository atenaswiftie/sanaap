import {makeStyles} from '../../../styles';

export const useStyles = makeStyles()((theme) => {
  return {
    selected: {
      paddingRight: theme.spacing(5),
    },
    destructive: {
      color: theme.palette.error.main,
    },
    checkedIcon: {
      color: theme.palette.primary.main,
      verticalAlign: 'top',
    },
  };
});
