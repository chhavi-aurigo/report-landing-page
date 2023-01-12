import { useState } from 'react';
import GridData from './GridData';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';

export interface IMainpageProps {}

export default function Mainpage(props: IMainpageProps) {
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
