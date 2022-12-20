import { setCookie, getCookie, removeCookie } from '../cookie';

describe('cookie test', () => {
  it(`test`, () => {
    expect(1).toEqual(1);
  });
  // describe('setCookie: ', () => {
  //   it(`setCookie('foo', 'bar') should create a cookie`, () => {
  //     setCookie('foo', 'bar');
  //     expect(getCookie('foo')).toEqual('bar');
  //   });

  //   afterAll(() => {
  //     removeCookie('foo');
  //   });
  // });

  // describe(`getCookie`, () => {
  //   beforeAll(() => {
  //     setCookie('name', 'william');
  //   });
  //   it(`getCookie('name') should return 'william' `, () => {
  //     expect(getCookie('name')).toEqual('william');
  //   });
  //   it(`getCookie('empty') should return '' `, () => {
  //     expect(getCookie('empty')).toEqual('');
  //   });

  //   afterAll(() => {
  //     removeCookie('name');
  //     removeCookie('empty');
  //   });
  // });

  // describe(`removeCookie`, () => {
  //   beforeAll(() => {
  //     setCookie('foo', 'bar');
  //   });

  //   it(`removeCookie('foo') should delete the key of the 'foo' of the cookie`, () => {
  //     removeCookie('foo');
  //     expect(getCookie('foo') === 'bar').toBeFalsy();
  //   });
  // });
});
