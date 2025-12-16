import Base from './base';

class Spinner extends Base {
    render() {
        return (
            <div className="flex align-middle justify-center" {...this.props}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

export default Spinner;
