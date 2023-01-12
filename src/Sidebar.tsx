import {
  SidebarComponent,
  TreeViewComponent,
  NodeSelectEventArgs,
  //ClickEventArgs,
} from '@syncfusion/ej2-react-navigations';

export default function Sidebar(props: {
  setTitle: (title: string) => void;
}): JSX.Element {
  let sidebarobj: SidebarComponent;

  let treeData: { [key: string]: Object }[] = [
    { id: '1', name: 'Reports', hasChild: true, expanded: true },
    { id: '2', name: 'Recent Reports', selected: true, pid: '1' },
    { id: '3', name: 'Created By Me', pid: '1' },
    { id: '4', name: 'Published Reports', pid: '1' },
    { id: '5', name: 'Summary Reports', pid: '1' },
    { id: '6', name: 'Favorites', hasChild: true, expanded: true },
    { id: '7', name: 'Recent Reports', pid: '6' },
    { id: '8', name: 'Created By Me', pid: '6' },
    { id: '9', name: 'Folders', hasChild: true, expanded: true },
    { id: '10', name: 'FolderA', pid: '9' },
    { id: '11', name: 'FolderB', pid: '9' },
    { id: '12', name: 'FolderC', pid: '9' },
  ];

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
