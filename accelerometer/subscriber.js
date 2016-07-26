var Kuzzle = require('kuzzle-sdk');

console.log('Initializing...');

var kuzzle = new Kuzzle('http://sandbox.kuzzle.io:7512/',
  {defaultIndex: 'tesselcontest'},
  function (err, res) {
  if (err) {
    throw new Error(err);
    return;
  }

  console.log('Kuzzle Ready...')

  kuzzle
    .dataCollectionFactory('tessel')
    .subscribe({}, function (err, notification) {
      if (err) {
        throw new Error(err)
        return
      }
      console.log(notification.result._source);
    })

  console.log('And listening')
});
