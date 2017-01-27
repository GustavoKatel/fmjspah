angular.module('spah')

.factory('spahData', function() {

  var data = {

    palestras: [
      {
        nome: 'À definir',
        data_hora: new Date('2017-03-01 14:30'),
        palestrante: {
          nome: 'Dr. Sérgio Araújo',
          cv: '',
          foto: 'http://192.168.1.3:8082/images/event/event1.jpg'
        }
      },
      {
        nome: 'À definir',
        data_hora: new Date('2017-01-27 11:00'),
        palestrante: {
          nome: 'Dra. Lívia Siebra',
          cv: '',
          foto: 'http://192.168.1.3:8082/images/event/event2.jpg'
        }
      },
      {
        nome: 'À definir',
        data_hora: new Date(),
        palestrante: {
          nome: 'À definir',
          cv: '',
          foto: 'http://192.168.1.3:8082/images/event/event3.jpg'
        }
      },
      {
        nome: 'À definir',
        data_hora: new Date(),
        palestrante: {
          nome: 'À definir',
          cv: '',
          foto: 'http://192.168.1.3:8082/images/event/event2.jpg'
        }
      }
    ]

  };

  return data;

});
