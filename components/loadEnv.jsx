import Base from './base';
import EnvState from '../providers/env';
import {loadEnv} from '@smoxy-io/js-utils/classes/env';
import PropTypes from 'prop-types';

class LoadEnv extends Base {
  componentDidMount() {
    const setEnv = this.props.data.setEnv;
    const apiClient = this.props.apiClient;

    // load the environment variables from the server
    loadEnv(setEnv, apiClient).catch((e) => {
      console.error('failed to load env from server:', e);
    });
  }

  render() {
    return (<></>);
  }
}

LoadEnv.propTypes = {
  apiClient: PropTypes.shape({
    getEnv: PropTypes.func.isRequired
  })
};

LoadEnv.defaultProps = {
  apiClient: null
};

export default function (props) {
  const [env, setEnv] = EnvState.useContext();

  return (<LoadEnv data={{env, setEnv}} {...props} />);
};
