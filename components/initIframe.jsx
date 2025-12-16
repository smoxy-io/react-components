import Base from './base';
import ConfigState from '../providers/config';
import {init} from '@smoxy-io/js-utils/lib/iframe';
import {loadConfig} from '@smoxy-io/js-utils/classes/config';

class InitIframe extends Base {
  componentDidMount() {
    const {config, setConfig} = this.props.data;

    loadConfig(setConfig);

    // initialize the iframe
    init(config, setConfig);
  }

  render() {
    return (<></>);
  }
}

export default function (props) {
  const [config, setConfig] = ConfigState.useContext();

  return (<InitIframe data={{config, setConfig}} {...props} />);
};
