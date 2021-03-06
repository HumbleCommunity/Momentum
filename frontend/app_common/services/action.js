angular
  .module('momentum')
  .factory('Action', Action);

Action.$inject = ['$http', '$auth', '$stateParams', '$alert'];

function Action($http, $auth, $stateParams, $alert) {
    return {
      find: find,
      findOne: findOne,
      create: create,
      update: update,
      destroy: destroy
    };

    function find(id) {
        return $http.get('/campaign/' + id + '/action/').error(function(error) {
          $alert({ content: JSON.stringify(error) });
        });
    }

    function findOne(id) {
        return $http.get('/campaign/' + $stateParams.campaign + '/action/' + id).error(function(error) {
          $alert({ content: JSON.stringify(error) });
        });
    }

    function create(action) {
        return $http.post('/campaign/' + $stateParams.campaign + '/action/', action).error(function(error) {
          $alert({ content: JSON.stringify(error) });
        });
    }

    function update(action) {
        return $http.put('/campaign/' + $stateParams.campaign + '/action/'  + action.id , action).error(function(error) {
          $alert({ content: JSON.stringify(error) });
        });
    }

    function destroy(id) {
        return $http.delete('/campaign/' + $stateParams.id + '/action/' + id).error(function(error) {
          $alert({ content: JSON.stringify(error) });
        });
    }

  }