import {
  ColumnDirective,
  ColumnsDirective,
  Grid,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { reportData } from '../../../data/GridData/Data';
import '../../../App.css';

function GridData() {
  let grid: Grid | null;
  function dataBound() {
    grid?.hideScroll();
  }
  return (
    <GridComponent
      dataSource={reportData}
      height="480"
      ref={(g) => (grid = g)}
      dataBound={dataBound}
    >
      <ColumnsDirective>
        <ColumnDirective
          field="ReportID"
          headerText="Report ID"
          width="80"
          textAlign="Right"
        />
        <ColumnDirective
          field="ReportName"
          headerText="Report Name"
          width="150"
        />
        <ColumnDirective
          field="CreatedBy"
          headerText="Created By"
          width="150"
        />
        <ColumnDirective
          field="CreatedOn"
          headerText="Created On"
          width="150"
        />
      </ColumnsDirective>
    </GridComponent>
  );
}

export default GridData;
