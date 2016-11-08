
import { expect } from 'chai';
import { selectorToString } from '../src/selector';

describe('selectorToString', () => {
  it('should return an empty string given a empty selector', () => {
    const result = selectorToString({});
    expect(result).to.be.a('string');
    expect(result).to.be.empty;
  });

  it('should return the given tag', () => {
    const result = selectorToString({
      tagName: 'section'
    });
    expect(result).to.be.a('string');
    expect(result).to.be.equal('section');
  });

  it('should return the given tag trimmed', () => {
    const result = selectorToString({
      tagName: '   div '
    });
    expect(result).to.be.a('string');
    expect(result).to.be.equal('div');
  });

  it('should return an id representation from the given id', () => {
    const result = selectorToString({
      id: 'foo'
    });
    expect(result).to.be.a('string');
    expect(result).to.be.equal('#foo');
  });

  it('should return an id representation trimmed', () => {
    const result = selectorToString({
      tagName: '   div ',
      id: 'foo'
    });
    expect(result).to.be.a('string');
    expect(result).to.be.equal('div#foo');
  });

  it('should return a valid representation given a tag and a id', () => {
    const result = selectorToString({
      id: '   foo '
    });
    expect(result).to.be.a('string');
    expect(result).to.be.equal('#foo');
  });

  it('should return a class representation from the given class', () => {
    const result = selectorToString({
      className: 'bar'
    });
    expect(result).to.be.a('string');
    expect(result).to.be.equal('.bar');
  });

  it('should return a class representation trimmed', () => {
    const result = selectorToString({
      className: ' bar    '
    });
    expect(result).to.be.a('string');
    expect(result).to.be.equal('.bar');
  });

  it('should return a class representation from multiple given classes', () => {
    const result = selectorToString({
      className: ' bar    qux '
    });
    expect(result).to.be.a('string');
    expect(result).to.be.equal('.bar.qux');
  });

  it('should return a valid representation given a tag, an id and several classes', () => {
    const result = selectorToString({
      className: ' bar    qux ',
      id: '   foo ',
      tagName: '   div '
    });
    expect(result).to.be.a('string');
    expect(result).to.be.equal('div#foo.bar.qux');
  });
});
