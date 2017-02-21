// Copyright 2016 Alvaro Vilanova Vidal. All rights reserved.
// This source code is governed by a MIT license found in the LICENSE file.

/// <reference path='./vnode.d.ts'/>
/// <reference path='./dom.d.ts'/>

import { Selector, selectorToString } from './selector';

export type VNode = Snabbdom.VNode<Element>;
export type VNodeData = Snabbdom.VNodeData<Element>;

export function createElement(type: string, props?: any, ...children: (VNode | string)[]): VNode {
  const selector = selectorFromReactElement(type, props);
  return {
    children: children.map(child =>
      (typeof child === 'string') ? stringToVNode(child) : child),
    data: { props: props },
    sel: selectorToString(selector)
  };
}

function selectorFromReactElement(type: string, props?: any): Selector {
  return {
    tagName: type,
    id: props ? props.id : undefined,
    className: props ? props.class : undefined
  };
}

function stringToVNode(str: string): VNode {
  return { text: str };
}
