describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "C" para "A" con offset 2', () => {
      assert.equal(cipher.encode(2,"A"), 'C');
    });
    it('debería retornar "c" para "a" con offset 2', () => {
      assert.equal(cipher.encode(2,"a"), 'c');
    });
    it('deberia retornar "3" para "1" con offset de 2', () => {
      assert.equal(cipher.encode(2,"1"), '3');
    });
    it('deberia retornar """ para " " con offset de 2', () => {
      assert.equal(cipher.encode(2," "), '"');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => 
    assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 'HIJKLMNOPQRSTUVWXYZABCDEFG')
  );
  it('deberia retornar "Jqnc"owpfq" para "Hola mundo"con offset de 2', () => {
    assert.equal(cipher.encode(2,"Hola mundo"), 'Jqnc"owpfq');
  });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "A" para "C" con offset 2', () => {
      assert.equal(cipher.decode(2,"C"), 'A');
    });
    it('deberia retornar "a" para "c" con offset de 2', () => {
      assert.equal(cipher.decode(2,"c"), 'a');
    });
    it('deberia retornar "1" para "3" con offset de 2', () => {
      assert.equal(cipher.decode(2,"3"), '1');
    })
    it('deberia retornar "Hola mundo" para "Jqnc"owpfq" con offset de 2', () => {
      assert.equal(cipher.decode(2, 'Jqnc"owpfq'), 'Hola mundo');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () =>
    assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ") 
    );
  });

});
