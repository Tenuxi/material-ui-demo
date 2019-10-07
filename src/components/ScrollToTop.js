import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({
  children,
  history: { action },
  location: { pathname }
}) => {
  useEffect(() => {
    if (action == "PUSH") {
      window.scrollTo(0, 50);
    }
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);