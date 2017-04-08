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
        nome: 'Manejo seguro dos Medicamentos – Da prescrição à conciliação',
        data_hora: new Date(2017, 4, 5, 21, 30),
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
        nome: 'Manejo de Hemocomponentes - Fazendo Hemotransfusão Segura',
        data_hora: new Date(2017, 4, 5, 19, 40),
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
        nome: 'Pneumonia relacionada à Ventilação Mecânica - Como prevenir?',
        data_hora: new Date(2017, 4, 6, 20, 40),
        palestrante: {
          nome: 'Thiago Alcanfor',
          cv: 'Pós graduado em Fisioterapia em Terapia Intensiva pela Faculdade Redentor - Rio de Janeiro - RJ. Título de Especialista em Fisioterapia em Terapia Intensiva pela Associação Brasileira de Fisioterapia Cardiovascular, Respiratória e Fisioterapia em Terapia Intensiva - ASSOBRAFIR. Diretor da Regional Ceará da ASSOBRAFIR. Coordenador da Equipe de Fisioterapia do Hospital Regional do Cariri - HRC. Delegado do Conselho de Regional de Fisioterapia e Terapia Ocupacional da 6\' Região - CREFITO6. Docente de Fisioterapia em Terapia Intensiva da Faculdade de Integração do Sertão - FIS - Serra Talhada - PE',
          foto: '/images/palestrantes/thiago_x480.jpg'
        }
      },

      {
        nome: 'A definir',
        data_hora: new Date(2017, 4, 2, 20, 0),
        palestrante: {
          nome: 'Demostênia Coelho Rodrigues',
          cv: 'Diretora Geral do HRC. Bacharel em enfermagem pela UFC. Mestranda em desenvolvimento regional sustentável pela UFCA. Especialista em gestão dos serviços de saúde pela ESP/CE. Especialista em gestão da qualidade em ambientes hospitalares pela ESP/CE. Especialista internacional em qualidade em saúde e segurança do paciente pela FIOCRUZ. Especialista em auditoria nos serviços de saúde pública e privada pelo CEQUALE.',
          foto: '/images/microfone.jpg'
        }
      },

      {
        nome: 'A definir',
        data_hora: new Date(2017, 4, 2, 20, 0),
        palestrante: {
          nome: 'Anne Rafaela Tavares de Moura',
          cv: 'Enfermeira. Coordenadora Geral de Enfermagem do HRC. Enfermeira Operacional do SAMU Juazeiro do Norte. Mestranda em Gestão da Saúde pela UECE. Especialista em Gestão da Qualidade dos Serviços de Saúde pela ESP. Especialista em Enfermagem em Urgência e Emergência pela FIP',
          foto: '/images/palestrantes/anne_rafaela.jpg'
        }
      },

      {
        nome: 'A definir',
        data_hora: new Date(2017, 4, 2, 20, 0),
        palestrante: {
          nome: 'Monize de Freitas Neuron',
          cv: 'Enfermeira Formada pela Universidade Regional do Cariri - Campus Avançado de Iguatu CAI. Em 2010. Possui Pós Graduação em Pesquisa e Inovação em Saúde da Família Pela UFC. Enfermeira Socorrista com Curso de APH. Foi Enfermeira Assistencialista em diversos hospitais da região centro sul do estado .Ataundo ainda como Docente e na Preceptoria de estágios da URCA no Curso de Enfermagem.Atualmente sou Coordenadora de Enfermagem Da Unidade de Cuidados Especiais (UCE) e da Unidade de AVC (UAVC) do Hospital Regional do Cariri.',
          foto: '/images/palestrantes/monize.jpg'
        }
      },

      {
        nome: 'A definir',
        data_hora: new Date(2017, 4, 2, 20, 0),
        palestrante: {
          nome: 'Nárya Maria Gonçalves de Brito',
          cv: 'Gerente de Risco do Hospital Regional do Cariri. Enfermeira do Hospital Regional de Cajazeiras. Especialista em Gestão da Qualidade no Ambiente Hospitalar. Mestranda em Ciências da Saúde.',
          foto: '/images/microfone.jpg'
        }
      }

    ]

  };

  return data;

});
