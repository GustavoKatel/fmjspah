
angular.module('spah', ['ui.bootstrap'])

.controller('homeCtrl', function() {

})

.controller('proxPalestraCtrl', function(spahData, $log, $interval, $window) {

  var ctrl = this;

  ctrl.cd = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 1,
  };

  ctrl.getNextPalestra = function() {

    var next = spahData.palestras[0];
    var now = new Date();
    for(var i in spahData.palestras) {

      var palestra = spahData.palestras[i];

      if(palestra.data_hora < now) continue;

      if(palestra.data_hora < next.data_hora) next = palestra;

    }

    return next;

  };

  $interval(function() {

    var date = ctrl.getNextPalestra().data_hora;
    var date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
    var diff = Math.abs( $window.moment().diff(date) );

    var duration = $window.moment.duration(diff, 'milliseconds');

    ctrl.cd.days = parseInt(duration.asDays());
    ctrl.cd.hours = duration.hours();
    ctrl.cd.minutes = duration.minutes();
    ctrl.cd.seconds = duration.seconds();

  }, 2000);

})

.controller('palestrasCtrl', function($scope, spahData, formatDate, $log, $uibModal, $document) {

  var ctrl = this;

  ctrl.chunks = [];
  var i=0;
  while(i < spahData.palestras.length) {
    ctrl.chunks.push(spahData.palestras.slice(i, i+3));
    i+=3;
  }

  ctrl.formatDate = formatDate;

  ctrl.currentPalestra = {};

  ctrl.showPalestra = function(palestra) {
    ctrl.currentPalestra = palestra;
    ctrl.open();
  }

  ctrl.open = function (size) {
    var parentElem = angular.element($document[0].querySelector('#palestras'));
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'palestra-view.html',
      controller: 'palestraViewCtrl',
      controllerAs: 'ctrl',
      size: size,
      appendTo: parentElem,
      windowClass: 'generic-modal palestra-view-modal',
      resolve: {
        palestra: function () {
          return ctrl.currentPalestra;
        }
      }
    });

    modalInstance.result.then(function () {
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

})

.controller('palestraViewCtrl', function($uibModalInstance, formatDate, palestra, $log) {

  var ctrl = this;

  ctrl.formatDate = formatDate;

  ctrl.palestra = palestra;

  ctrl.ok = function () {
    $uibModalInstance.close();
  };

  ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

})

.controller('sobreCtrl', function() {

})

.controller('inscricaoCtrl', function() {

})

.controller('submissaoCtrl', function() {

})

.controller('contactCtrl', function($log, $window) {

  var ctrl = this;

  ctrl.topic = '';
  ctrl.message = '';

  ctrl.emailTo = 'contato@email.com';

  ctrl.submitForm = function() {
    var topic = ctrl.topic || 'Contato - SPAH';
    var message = ctrl.message || '';

    if(topic.trim() === '' || message.length == 0) {
      $window.alert('Assunto e mensagem são obrigatórios');
      return;
    }

    $window.open('mailto:'+
      ctrl.emailTo+'?'+
      'subject='+topic+'&'+
      'body='+message
    );
  };

})

.factory('formatDate', function() {

  function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  return function(data) {
    return pad(data.getDate(), 2)+'/'+
      pad(data.getMonth()+1, 2)+'/'+
      data.getFullYear()+' '+
      pad(data.getHours(), 2)+'h ' +
      pad(data.getMinutes(), 2);
  }

});
