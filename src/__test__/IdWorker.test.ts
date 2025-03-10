import IDWorker from '../IdWorker';

describe('IDWorker', () => {
  it('should generate unique IDs', () => {
    const idWorker = new IDWorker(1n, 1n);
    const ids = new Set();

    // 生成多个ID并确保它们都是唯一的
    for (let i = 0; i < 100; i++) {
      const id = idWorker.nextId();
      expect(ids.has(id.toString())).toBe(false);
      ids.add(id.toString());
    }
  });

  it('should throw error when workerId is invalid', () => {
    expect(() => new IDWorker(32n, 1n)).toThrow();
    expect(() => new IDWorker(-1n, 1n)).toThrow();
  });

  it('should throw error when dataCenterId is invalid', () => {
    expect(() => new IDWorker(1n, 32n)).toThrow();
    expect(() => new IDWorker(1n, -1n)).toThrow();
  });

  it('should generate IDs in ascending order', () => {
    const idWorker = new IDWorker(1n, 1n);
    let lastId = 0n;

    for (let i = 0; i < 10; i++) {
      const id = idWorker.nextId();
      expect(id > lastId).toBe(true);
      lastId = id;
    }
  });
});
