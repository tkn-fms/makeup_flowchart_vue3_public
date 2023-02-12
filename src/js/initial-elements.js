//import { MarkerType } from '@braks/vue-flow'
export const initialElements = [
  // ノード
  { id: '1',
    type: 'input',
    label: 'メイク開始',
    position: { x: 250, y: 5 },
    class: 'light',
  },
]

/*
{ id: '2',
  type: 'output',
  label: 'メイク終了',
  position: { x: 450, y: 5 },
}
export const initialElements = [
  //ノード
  { id: '1',
    type: 'input',
    label: 'メイク開始:1',
    position: { x: 250, y: 5 },
    class: 'light',
  },
  { id: '2',
    type: 'customMake',
    label: '化粧下地 :2',
    position: { x: 100, y: 100 },
    class: 'light',
    data: {
      partName: "肌",
      partNum: 0,
      itemName: "化粧下地",
      itemNum: 1,
      typeName: "指定なし",
      typeNum: 0,
    },
  },
  { id: '3',
    type: 'customMake',
    label: '日焼け止め :3',
    position: { x: 400, y: 100 },
    class: 'light',
    data: {
      partName: "肌",
      partNum: 0,
      itemName: "日焼け止め",
      itemNum: 0,
      typeName: "色付き",
      typeNum: 1,
    },
  },
  { id: '4',
    type: 'customMake',
    label: 'フェイスパウダー(プレスト) :4',
    position: { x: 230, y: 200 },
    class: 'light',
    data: {
      partName: "肌",
      partNum: 0,
      itemName: "フェイスパウダー",
      itemNum: 7,
      typeName: "プレスト",
      typeNum: 1,
    },
  },
  { id: '5',
    type: 'output',
    label: 'メイク終了 :5',
    position: { x: 250, y: 330 },
    class: 'light'
  },
  // エッジ
  { id: 'e1-2',
    source: '1',
    target: '2',
    markerEnd: MarkerType.ArrowClosed,
  },
  { id: 'e1-3',
    source: '1',
    target: '3',
    markerEnd: MarkerType.ArrowClosed,
  },
  { id: 'e2-4',
    source: '2',
    target: '4',
    markerEnd: MarkerType.ArrowClosed,
  },
  { id: 'e3-4',
    source: '3',
    target: '4',
    markerEnd: MarkerType.ArrowClosed,
  },
  { id: 'e4-5',
    label: 'label',
    source: '4',
    target: '5',
    style: { stroke: 'orange' },
    labelBgStyle: { fill: 'orange' },
    markerEnd: MarkerType.ArrowClosed,
  },
]
*///
