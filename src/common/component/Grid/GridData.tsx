import { Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import '../../../App.css';

function GridData(props: { columns: object[]; reportData: object[] }) {
  let grid: Grid | null;

  function dataBound() {
    grid?.hideScroll();
  }
  return (
    <GridComponent
      dataSource={props.reportData}
      height="480"
      ref={(g) => (grid = g)}
      dataBound={dataBound}
      columns={props.columns}
    ></GridComponent>
  );
}

export default GridData;
