import React from 'react';
import OrgNode from './OrgNode';
import { ORG_DATA } from '../constants';

const OrgChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-8 px-4 w-full">
      <OrgNode node={ORG_DATA} isRoot={true} />
    </div>
  );
};

export default OrgChart;