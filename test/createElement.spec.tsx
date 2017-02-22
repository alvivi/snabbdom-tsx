
import 'mocha';
import { expect } from 'chai';
import { VNode } from '../src';
import * as Snabbdom from '../src';

describe('createElement', () => {
  it('should handle simple tags', () => {
    const node = <div></div>;
    expect(node).to.be.an('object');
    expect(node.sel).to.be.a('string');
    expect(node.sel).to.be.equal('div');
    expect(node.text).to.be.undefined;
    expect(node.children).to.be.empty;
  });

  it('should always create a data field', () => {
    const node = <div></div>;
    expect(node.data).to.be.an('object');
  });

  it('should handle tags id', () => {
    const node = <div id="foo"></div>;
    expect(node).to.be.an('object');
    expect(node.sel).to.be.a('string');
    expect(node.sel).to.be.equal('div#foo');
    expect(node.text).to.be.undefined;
    expect(node.children).to.be.empty;
  });

  it('should handle tags classes', () => {
    const node = <div class="foo bar"></div>;
    expect(node).to.be.an('object');
    expect(node.sel).to.be.a('string');
    expect(node.sel).to.be.equal('div.foo.bar');
    expect(node.text).to.be.undefined;
    expect(node.children).to.be.empty;
  });

  it('should handle tag ids and classes together', () => {
    const node = <div id="qux" class="foo bar"></div>;
    expect(node).to.be.an('object');
    expect(node.sel).to.be.a('string');
    expect(node.sel).to.be.equal('div#qux.foo.bar');
    expect(node.text).to.be.undefined;
    expect(node.children).to.be.empty;
  });

  it('should handle text children', () => {
    const node = <p>Foo Bar!</p>;
    const child = (node.children || [{}])[0] as VNode;
    expect(child).to.be.an('object');
    expect(child.text).to.be.a('string');
    expect(child.text).to.be.equal('Foo Bar!');
  });

  it('should handle node children', () => {
    const node = <section><h1>Hello</h1><p>Foo Bar</p></section>;
    expect(node).to.be.an('object');
    expect(node.sel).to.be.equal('section');
    expect(node.text).to.be.undefined;
    expect(node.children).to.be.an('array');
    expect(node.children).to.have.length(2);
  });

  it('should handle text and node children', () => {
    const node = <p>Hello <strong>World</strong></p>;
    const firstChild = (node.children || [{}])[0] as VNode;
    const secondChild = (node.children || [{}])[1] as VNode;
    const secondFirstChild = (secondChild.children || [{}])[0] as VNode;
    expect(node).to.be.an('object');
    expect(node.sel).to.be.equal('p');
    expect(node.text).to.be.undefined;
    expect(node.children).to.be.an('array');
    expect(node.children).to.have.length(2);
    expect(firstChild).to.be.an('object');
    expect(firstChild.sel).to.be.undefined;
    expect(firstChild.text).to.be.an('string');
    expect(firstChild.text).to.be.equal('Hello ');
    expect(secondChild).to.be.an('object');
    expect(secondChild.sel).to.be.a('string');
    expect(secondChild.sel).to.be.equal('strong');
    expect(secondChild.text).to.be.undefined;
    expect(secondFirstChild).to.be.an('object');
    expect(secondFirstChild.sel).to.be.undefined;
    expect(secondFirstChild.text).to.be.an('string');
    expect(secondFirstChild.text).to.be.equal('World');
  });

  it('should handle node properties', () => {
    const node = <input type="checkbox" />
    expect(node).to.be.an('object');
    expect(node.sel).to.be.equal('input');
    expect(node.text).to.be.undefined;
    expect(node.data).to.be.an('object');
    expect((node.data || {}).props).to.be.an('object');
    expect(((node.data || {}).props || {}).type).to.be.an('string');
    expect(((node.data || {}).props || {}).type).to.be.equal('checkbox');
  });

  it('should handle style properties', () => {
    const node = <input type="checkbox" style={{ backgroundColor: 'green' }} />
    expect(node).to.be.an('object');
    expect(node.sel).to.be.equal('input');
    expect(node.text).to.be.undefined;
    expect(node.data).to.be.an('object');
    expect((node.data || {}).props).to.be.an('object');
    expect(((node.data || {}).props || {}).type).to.be.an('string');
    expect(((node.data || {}).props || {}).type).to.be.equal('checkbox');
    expect(((node.data || {}).props || {}).style).to.be.undefined;
    expect((node.data || {}).style).to.be.an('object');
    expect(((node.data || {}).style || {}).backgroundColor).to.be.a('string');
    expect(((node.data || {}).style || {}).backgroundColor).be.equal('green');
  });
});
