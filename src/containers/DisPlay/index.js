import { connect } from 'react-redux';
import display from '../../components/display';

const mapStateToProps = state => ({ num: state.amount });

const DisplayAcorn = connect(
  mapStateToProps,
)(display);

export default DisplayAcorn;
