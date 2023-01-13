import {
  ClickEventArgs,
  ItemDirective,
  ItemsDirective,
  ToolbarComponent,
} from '@syncfusion/ej2-react-navigations';

export interface IToolbarProps {
  title: string;
}

export default function Toolbar(props: IToolbarProps) {
  //Toolbar component template element specification
  let titleEle: string = `<div class= "e-folder"><div>${props.title}</div></div>`;
  let newReportEle: string = `<div><div class= "e-create-report">+ Create New Report</div></div>`;

  return (
    <div>
      <ToolbarComponent
        cssClass="defaultToolbar"
        id="defaultToolbar"
        clicked={toolbarCliked}
      >
        <ItemsDirective>
          <ItemDirective template={titleEle}></ItemDirective>
          <ItemDirective
            align="Right"
            template={newReportEle}
            id="newReport"
          ></ItemDirective>
        </ItemsDirective>
      </ToolbarComponent>
    </div>
  );

  //open / close the sidebar
  function toolbarCliked(args: ClickEventArgs) {
    if (args.item.id === 'newReport') {
      onClickNewReport();
    }
  }
  function onClickNewReport() {
    alert('Yet to implement Create New Report Click!!');
  }
}
