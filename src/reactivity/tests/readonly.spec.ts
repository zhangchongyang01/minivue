import { readonly,isReadonly} from '../reactive'
describe("readonly", () => {
  it("happy path", () => {
    // not set
    const original = {foo: 1,bar: {baz: 2}};
    const wrapped = readonly(original);
    expect(wrapped).not.toBe(original);
    expect(isReadonly(wrapped)).toBe(true);
    expect(isReadonly(wrapped.bar)).toBe(true);
    expect(isReadonly(original.bar)).toBe(false);
    expect(wrapped.foo).toBe(1)
  })

  it('warn then call set', () => {
    const user = readonly({
      age: 10
    })
    console.warn = jest.fn();
    user.age = 11;
    expect(console.warn).toBeCalled();
  })
})