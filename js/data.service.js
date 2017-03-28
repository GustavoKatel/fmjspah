angular.module('spah')

.factory('spahData', function() {

  var data = {

    palestras: [
      {
        nome: 'A definir',
        data_hora: new Date(2017, 4, 2, 19, 0),
        palestrante: {
          nome: 'Dr. Sérgio Araújo',
          cv: '',
          foto: '/images/palestrantes/dr.sergio.jpeg'
        }
      },
      {
        nome: 'Segurança do Paciente e Implicações Jurídicas',
        data_hora: new Date(2017, 4, 2, 19, 0),
        palestrante: {
          nome: 'Dra. Lívia Siebra',
          cv: 'Advogada inscrita na OAB/CE 28.897. Graduada pela Universidade Regional do Cariri. Pós-graduada em Direito Penal e Criminologia pela URCA. Pós-graduanda em Direito Médico, Hospitalar e da Saúde pela ESMECAM. Especialista em Direito Médico/Hospitalar e da Saúde.',
          foto: '/images/palestrantes/dra.livia.jpg'
        }
      },
      {
        nome: 'A definir',
        data_hora: new Date(2017, 1, 1, 15, 0),
        palestrante: {
          nome: 'Rosangela Maria Araújo Teles',
          cv: 'Farmacêutica, gerente da Farmacia do Hospital Regional do Cariri- ISGH, pós-graduanda no curso de Especializaçao em Atençao Farmaceutica',
          foto: '/images/palestrantes/rosangela.jpg'
        }
      },
      {
        nome: 'A definir',
        data_hora: new Date(2017, 1, 1, 15, 0),
        palestrante: {
          nome: 'A definir',
          cv: '',
          foto: '/images/microfone.jpg'
        }
      }
    ]

  };

  return data;

});
