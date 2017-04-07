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
        data_hora: new Date(2017, 4, 3, 15, 0),
        palestrante: {
          nome: 'Rodrigo Luis Mousinho Gomes',
          cv: 'Formação em Fisioterapia pela UFPE, Pós em UTI e Fisioterapia Cardiorrespiratória pela UFPE, Pós docência do Ensino Superios UNESA, Mestrado em Ciências da Saúde pela UFPE, Fisioterapeuta plantonista da UTI do Hospital São Vicente e Professor Coordenador do curso de Fisioterapia Estácio FMJ',
          foto: '/images/palestrantes/rodrigo.jpg'
        }
      },

      {
        nome: 'A definir',
        data_hora: new Date(2017, 4, 3, 15, 0),
        palestrante: {
          nome: 'Christianne Andrezza Melo Sobreira',
          cv: 'Mestre em Saúde Coletiva com concentração em Gestão em Saúde e ênfase em hemoterapia. Coordenadora de enfermagem da Agência Transfusional do Hospital Regional do Cariri. Avaliadora do Programa Nacional de Qualificação da Hemorrede.',
          foto: '/images/palestrantes/christianne.jpg'
        }
      },

      {
        nome: 'A definir',
        data_hora: new Date(2017, 4, 3, 15, 0),
        palestrante: {
          nome: 'Hermes Melo Teixeira Batista',
          cv: 'Anestesiologista pela SBA. Membro da sociedade européia de anestesiologia. Mestre em Ciências da Saúde pela FMABC. Especialista em Preceptoria de residencia médica pelo Sírio Libanês',
          foto: '/images/palestrantes/hermes.jpg'
        }
      },

      {
        nome: 'A definir',
        data_hora: new Date(2017, 4, 3, 15, 0),
        palestrante: {
          nome: 'Thiago Alcanfor',
          cv: 'Pós graduado em Fisioterapia em Terapia Intensiva pela Faculdade Redentor - Rio de Janeiro - RJ. Título de Especialista em Fisioterapia em Terapia Intensiva pela Associação Brasileira de Fisioterapia Cardiovascular, Respiratória e Fisioterapia em Terapia Intensiva - ASSOBRAFIR. Diretor da Regional Ceará da ASSOBRAFIR. Coordenador da Equipe de Fisioterapia do Hospital Regional do Cariri - HRC. Delegado do Conselho de Regional de Fisioterapia e Terapia Ocupacional da 6\' Região - CREFITO6. Docente de Fisioterapia em Terapia Intensiva da Faculdade de Integração do Sertão - FIS - Serra Talhada - PE',
          foto: '/images/palestrantes/thiago_x480.jpg'
        }
      }

    ]

  };

  return data;

});
