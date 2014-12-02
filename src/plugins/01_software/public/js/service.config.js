//var ConfigService = ['$log', function($log) {
//  var config = {};
//
//  config.test = function() {
//    $log.debug('foo');
//  };
//
//  return config;
//}];

var ConfigService = ['$q', '$http', function($q, $http) {
  var config = {};

  config.isUpdateEnabled = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'plugin/software/config'
    })
      .then(
      function(result) {
        deferred.resolve(result.data.enableUpdates);
      },
      function() {
        deferred.resolve(false);
      });
    return deferred.promise;
  };

  config.enableUpdate = function() {
    $http({
      method: 'POST',
      url: 'plugin/software/config/enableUpdates/true'
    })
      .then(
      function() {
        console.log("Software updates successfully enabled.");
      },
      function(reason) {
        console.log("Could not enable Software updates. Reason: " + reason);
      }
    );
  };

  return config;
}];