import { connect } from 'react-redux';
import { buyOne } from '../../redux/action';
import Button from '../../components/button';

const mapStateToProps = () => ({ str: 'Buy one' });

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(buyOne(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
