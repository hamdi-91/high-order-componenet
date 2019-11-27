import React from 'react';

function WithLoading(WrappedComponent) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<WrappedComponent {...props} />);
    return (<div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>);
  }
}
export default WithLoading;