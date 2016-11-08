// Copyright 2016 Alvaro Vilanova Vidal. All rights reserved.
// This source code is governed by a MIT license found in the LICENSE file.

declare namespace Snabbdom {
  interface VNode<E extends Element> {
    children?: (VNode<any> | string)[];
    data?: VNodeData<E>;
    elm?: E | Text;
    key?: string | number;
    sel?: string;
    text?: string;
  }

  interface VNodeData<E extends Element> {
    // Modules
    attrs?: any;
    class?: any;
    hero?: any;
    on?: any;
    props?: any;
    style?: any;

    // Thunks
    args?: any[];
    fn?: () => VNode<E>;

    // hook?: Hooks;
    key?: string | number;
    ns?: string;
  }
}
