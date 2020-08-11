import {useSize} from "ahooks";
import {useLocalStore} from "mobx-react";
import {useEffect, useRef} from "react";

let DEFAULT_WIDTH = 500;

export default function useGridLayout({layout, options}) {
  const container = useRef(null);
  const containerSize = useSize(container);

  const state = useLocalStore(() => ({
    layout: [...layout],

    get cols() {
      return options && options.cols ? options.cols : 48;
    },
    get rowHeight() {
      return options && options.rowHeight ? options.rowHeight : 16.5;
    },
    get margin() {
      return options && options.margin ? options.margin : [0, 0];
    },

    genWidth: DEFAULT_WIDTH,
    get width() {
      return options && options.width ? options.width : state.genWidth;
    },
  }))

  useEffect(() => {
    state.genWidth = containerSize.width ? containerSize.width : DEFAULT_WIDTH;
  }, [containerSize])

  return [state, container];
}
