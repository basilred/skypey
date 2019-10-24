import PropTypes from 'prop-types';

const user = {
  user: PropTypes.exact({
    email: PropTypes.string,
    name: PropTypes.string.isRequired,
    profile_pic: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    user_id: PropTypes.string,
  }).isRequired,
};

const activeUserId = {
  activeUserId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]), // for null
  ]).isRequired,
};

const contacts = {
  contacts: PropTypes.arrayOf(user.user).isRequired,
};

export { user, activeUserId, contacts };
