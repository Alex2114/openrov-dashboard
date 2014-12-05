var SoftwareApiService = [ '$http', '$q', function($http, $q) {

    var software = {};

    software.loadInstalledSoftware = function(showIndividualPackages) {
      var packageName = "openrov-rov-suite*";
      if (showIndividualPackages) {
        packageName = "openrov-*";
      }
      return $http({
        method: 'GET',
        url: 'plugin/software/installed/' + packageName
      });
    };

    software.getUpdates = function(packageName) {
      return $http({
        method: 'GET',
        url: 'plugin/software/updates/' + packageName
      });
    };

    software.getPrevious = function(packageName) {
      return $http({
        method: 'GET',
        url: 'plugin/software/previous/' + packageName
      });
    };


    software.startAptUpdate = function(branch) {
      return $http({
        method: 'POST',
        url: 'plugin/software/update/start/' + branch
      });
    };

    software.aptUpdateStatus = function() {
      return $http({
        method: 'get',
        url: 'plugin/software/update/status'
      });
    };

    software.install = function(packageName, version, branch) {
      return $http({
        method: 'POST',
        url: 'plugin/software/install/start/' + packageName + '/' + version + '/' + branch
      });
    };

    software.installStatus = function() {
      return $http({
        method: 'get',
        url: 'plugin/software/install/status'
      });
    };

    software.getBbSerial = function() {
      return $http({
        method: 'GET',
        url: 'plugin/software/bbserial'
      });
    };

    return software;
  } ];