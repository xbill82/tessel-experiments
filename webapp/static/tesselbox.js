var kuzzle = new Kuzzle('http://sandbox.kuzzle.io:7512/',
  {defaultIndex: 'tesselcontest'},
  function (err, res) {
  if (err) {
    throw new Error(err);
    return;
  }

  console.log('Kuzzle Ready...')
  var lastTop = 0
  var lastLeft = 0
  var lastWidth = 0

  kuzzle
    .dataCollectionFactory('tessel')
    .subscribe({}, function (err, notification) {
      if (err) {
        throw new Error(err)
        return
      }

      newTop = lastTop + parseFloat(notification.result._source.y)
      newLeft = lastLeft - parseFloat(notification.result._source.x)
      newWidth = lastWidth - parseFloat(notification.result._source.z)

      if (newTop < 0 ) {
        newTop = 0
      }

      if (newTop >= window.innerHeight - 100) {
        newTop = window.innerHeight - 100
      }

      if (newLeft < 0 ) {
        newLeft = 0
      }

      if (newLeft >= window.innerWidth - 100) {
        newLeft = window.innerWidth - 100
      }

      document.getElementById('box').style.top = newTop + 'px'
      document.getElementById('box').style.left = newLeft + 'px'

      lastTop = newTop
      lastWidth = newWidth
      lastLeft = newLeft
    })

  console.log('And listening')
});
