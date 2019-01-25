angular.module('portainer.extensions.registrymanagement').component('registryRepositoriesDatatable', {
  templateUrl: 'app/extensions/registry-management/components/registries-repositories-datatable/registryRepositoriesDatatable.html',
  controller: 'RegistryRepositoriesDatatableController',
  bindings: {
    titleText: '@',
    titleIcon: '@',
    dataset: '<',
    tableKey: '@',
    orderBy: '@',
    reverseOrder: '<',
    paginationAction: '<',
    loading: '<'
  }
});
