import {makeStyles} from '../../../styles';

export const useStyles = makeStyles()((theme) => {
  return {
    list: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(3),
      '.MuiMenuItem-root': {
        padding: theme.spacing(2),
        marginBottom: 0,
        borderRadius: 0,
        '&:after': {
          content: "''",
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 56,
          borderBottom: `1px solid ${theme.palette.line.primary}`,
        },
      },
    },
  };
});
