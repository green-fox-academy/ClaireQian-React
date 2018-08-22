import { connect } from 'react-redux';
import { eatOne } from '../../redux/action';
import Button from '../../components/button';

const mapStateToProps = () => ({ str: 'Eat one' });

const mapDispatchToProps = dispatch => ({ func: () => dispatch(eatOne(-1)) });

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
