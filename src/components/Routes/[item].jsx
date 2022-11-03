import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '../Icons';

const Item = (props) => {
  const { page, component } = props;

  return (
    <>
      <div id="page">
        {page !== 'Teachers' && (
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button type="button" className="btn" style={{ marginLeft: '5px' }}>
              <ArrowBackIcon />
              Back
            </button>
          </Link>
        )}
      </div>
      <div id="component">{component}</div>
    </>
  );
};

export default Item;
