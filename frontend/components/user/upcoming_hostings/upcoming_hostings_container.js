import { connect } from 'react-redux';
import UpcomingHostings from './upcoming_hostings';
import { fetchUser, fetchGuests } from '../../../actions/user_actions/user_actions';

const msp = (state) => {
  let guests = [];
  state.entities.users[state.session.id].hosting_ids.map((id) => {
    if (state.entities.users[id]) {
      guests.push(state.entities.users[id]);
    }
  });

  return {
    guests: guests,
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (user) => dispatch(fetchUser(user)),
    fetchGuests: (id) => dispatch(fetchGuests(id))
  };
};

export default connect(msp, mdp)(UpcomingHostings);
