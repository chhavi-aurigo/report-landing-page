import { useState } from 'react';
import GridData from '../../../common/component/Grid/GridData';
import Sidebar from '../../../common/component/Sidebar/Sidebar';
import Toolbar from '../../../common/component/Toolbar/Toolbar';

export interface ILandingPageProps {}

export default function LandingPage(props: ILandingPageProps) {
  let [title, setTitle] = useState<string>('Recent Reports');

  return (
    <div className="control-section" id="sidebar-wrapper">
      <Toolbar title={title} />
      <Sidebar setTitle={setTitle} />
      <div className="maincontent">
        <GridData />
      </div>
    </div>
  );
}
