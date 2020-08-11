import React from 'react';
import GridLayout from '../../components/GridLayout';
import gridLayoutStyle from '../../components/GridLayout/style.module.css';

export default function GridLayoutDemo()  {

  return <GridLayout
    layout={[
      { 'w': 4, 'h': 3, 'x': 4, 'y': 0, 'i': 'a', 'moved': false, 'static': false },
      { 'w': 6, 'h': 6, 'x': 4, 'y': 3, 'i': 'b', 'moved': false, 'static': false },
      { 'w': 8, 'h': 9, 'x': 4, 'y': 19, 'i': 'c', 'moved': false, 'static': false },
      { 'w': 12, 'h': 10, 'x': 0, 'y': 9, 'i': 'd', 'moved': false, 'static': false },
    ]}
    options={{ width: 800, cols: 12 }}
  >
    <div key='a' className={gridLayoutStyle.item}>a</div>
    <div key='b' className={gridLayoutStyle.item}>b</div>
    <div key='c' className={gridLayoutStyle.item}><GridLayout
      layout={[]}
      options={{ width: 800, cols: 12 }}
    >
      <div key='a' className={gridLayoutStyle.item}>a</div>
      <div key='b' className={gridLayoutStyle.item}>b</div>
      <div key='c' className={gridLayoutStyle.item}>c</div>
      <div key='d' className={gridLayoutStyle.item}>d</div>
    </GridLayout></div>
    <div key='d' className={gridLayoutStyle.item}>d</div>
  </GridLayout>;
}

