import { connect } from 'react-redux';
import Dogs from '../components/dogs/Dogs';
import { getDogs } from '../selectors/dogsSelector';

const mapStateToProps = state => ({
  dogs: getDogs(state)
});

export default connect(
  mapStateToProps
)(Dogs);
