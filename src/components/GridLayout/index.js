import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import { useObserver } from 'mobx-react';
import useGridLayout from './useGridLayout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

export default function GridLayout({ layout, children, options }) {
  const [state, container] = useGridLayout({ layout, options });

  function printLayoutConfig(layout) {
    console.group('GridLayoutConfig:');
    console.info(JSON.stringify(layout));
    console.groupEnd();
  }

  return useObserver(() =>
    <div ref={container}>
      <ReactGridLayout
        className="layout" layout={state.layout} cols={state.cols} rowHeight={state.rowHeight} margin={state.margin}
        width={state.width}
        onLayoutChange={layout => printLayoutConfig(layout)}
      >
        {children}
      </ReactGridLayout>
    </div>,
  );
}
