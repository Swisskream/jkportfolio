import React, { useEffect, useState } from 'react';

const ViewCounter = () => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch('https://az2hwfcpaz4yhyu2p2x7gmyuie0xtgqa.lambda-url.us-west-1.on.aws/');
        const data = await response.json();
        setViews(data);
      } catch (error) {
        console.error('Error fetching view count:', error);
      }
    };

    fetchViews();
  }, []);

  return (
    <h4 className="counter-number">
      {views !== null ? `Views: ${views}` : 'Loading...'}
    </h4>
  );
};

export default ViewCounter;