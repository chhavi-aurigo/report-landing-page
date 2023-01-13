import {
  SidebarComponent,
  TreeViewComponent,
  NodeSelectEventArgs,
  //ClickEventArgs,
} from '@syncfusion/ej2-react-navigations';
import { treeData } from '../../../data/Sidebar/data';
import { ISidebarProps } from './type';

export default function Sidebar(props: ISidebarProps): JSX.Element {
  let sidebarobj: SidebarComponent;

  let treeFields: { [key: string]: Object } = {
    dataSource: treeData,
    id: 'id',
    text: 'name',
    selected: 'selected',
    parentID: 'pid',
    hasChildren: 'hasChild',
    expanded: 'expanded',
  };

  return (
    <SidebarComponent
      id="defaultSidebar"
      ref={(Sidebar) => ((sidebarobj as any) = Sidebar)}
      className="default-sidebar"
      width="200px"
      target=".maincontent"
      position="Left"
    >
      <TreeViewComponent
        id="defaultTree"
        fields={treeFields}
        nodeSelecting={beforeSelect}
        nodeSelected={onSelect}
      ></TreeViewComponent>
      <div className="new_folder_button">
        <div onClick={onClickNewFolder} className="e-create-report">
          + Create New Folder
        </div>
      </div>
    </SidebarComponent>
  );

  function onClickNewFolder(args: React.MouseEvent<HTMLDivElement>) {
    alert('Yet to implement Create New Folder click event!!');
  }

  function beforeSelect(args: NodeSelectEventArgs) {
    if (
      args.nodeData.text === 'Favorites' ||
      args.nodeData.text === 'Reports' ||
      args.nodeData.text === 'Folders'
    ) {
      args.cancel = true;
    }
  }

  function onSelect(args: NodeSelectEventArgs) {
    props.setTitle(args.nodeData.text.toString());
  }
}
