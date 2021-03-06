describe('dsFirebaseAdapter#findAll', function () {
  it('should find all the users in firebase', function (done) {
    var id, id2, u, u2;
    dsFirebaseAdapter.create(User, { name: 'John' })
      .then(function (user) {
        u = user;
        id = user.id;
        assert.equal(user.name, 'John');
        assert.isString(user.id);
        return dsFirebaseAdapter.create(User, { name: 'Sally' });
      })
      .then(function (user) {
        u2 = user;
        id2 = user.id;
        assert.equal(user.name, 'Sally');
        assert.isString(user.id);
        return dsFirebaseAdapter.findAll(User);
      })
      .then(function (users) {
        assert.equal(users.length, 2);
        assert.deepEqual(JSON.stringify(users, null, 2), JSON.stringify([u, u2], null, 2));
        done();
      })
      .catch(done);
  });
});
