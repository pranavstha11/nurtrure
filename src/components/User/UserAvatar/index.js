import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  avatar: {
    width: '75px',
    height: '75px',
    margin: '10px',
    order: 1,
    [theme.breakpoints.up('md')]: {
      width: '125px',
      height: '125px',
      order: 2,
    }
  },
});

function UserAvatar(props) {

  const { classes } = props;
  
  return(
    <Avatar
      alt="Photo by @josephgardnerphotography from unsplash.com"
      src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/34845477_1826254350769184_305587369786998784_n.jpg?_nc_cat=104&_nc_ohc=B6EP4o6teJ4AX98gr2b&_nc_ht=scontent.fktm3-1.fna&oh=1d214b9023ed7362a042a4fb6f05c755&oe=5ED9EF7D"
      className={classes.avatar}
    />
  )
}

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAvatar);

