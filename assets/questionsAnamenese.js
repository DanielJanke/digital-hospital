import {
  signIn,
  signOut
} from '../redux/Auth'

export const ANSWERTYPE = {
  BUTTON: 'Button',
  TEXT: 'Text',
  PICKER: 'PICKER'
}

const questionsAnamnese = [{
    question: "Wie lautet Ihr vollständiger Name?",
    answerType: ANSWERTYPE.TEXT,
    returnKeyType: 'next',
    placeholder: 'Max Mustermann',
    answerPath: 'name',
    nextQuestion: 1,
  },
  {
    question: "Wie lautet Ihre Anschrift (Straße Hausnummer, PLZ, Ort)",
    answerType: ANSWERTYPE.TEXT,
    placeholder: 'Musterstraße, 12345 Musterstadt',
    returnKeyType: 'next',
    answerPath: 'adress',
    nextQuestion: 2,
  },
  {
    question: "Wie lautet Ihre Telefonnummer?",
    answerType: ANSWERTYPE.TEXT,
    returnKeyType: 'next',
    placeholder: '030 12345679',
    answerPath: 'phone',
    nextQuestion: 3,
  },
  {
    question: "Wie lautet der Name Ihre Krankenversicherung?",
    answerType: ANSWERTYPE.TEXT,
    placeholder: 'AOK Nordost',
    returnKeyType: 'next',
    answerPath: 'insurance',
    nextQuestion: 4,
  },

  {
    question: "Als nächstes benötigen wir die Kontaktdaten, die Kontaktdaten Ihres nächsten Angehörigen.",
    answerType: ANSWERTYPE.BUTTON,
    placeholder: 'AOK Nordost',
    returnKeyType: 'next',
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Verstanden',
      nextQuestion: 5,
    }],
  },
  {

    question: "Wie lautet der vollständige Name Ihres Angehörigen?",
    answerType: ANSWERTYPE.TEXT,
    returnKeyType: 'next',
    placeholder: 'Martin Mustermann',
    answerPath: 'nameFamily',
    nextQuestion: 6,
  },
  {
    question: "Sind Sie Diabetiker?",
    answerType: ANSWERTYPE.BUTTON,
    returnKeyType: 'next',
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Ja',
      nextQuestion: 7,
      answerPath: 'diabetics',
      answerPayload: true
    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Nein',
      nextQuestion: 7,
      answerPath: 'diabetics',
      answerPayload: false
    }],
    answerPath: 'none',
  },
  {
    question: "Rauchen Sie?",
    answerType: ANSWERTYPE.BUTTON,
    returnKeyType: 'next',
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Ja',
      nextQuestion: 8,
      answerPath: 'smoker',
      answerPayload: true

    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Nein',
      nextQuestion: 9,
      answerPath: 'smoker',
      answerPayload: false
    }],
  },
  {
    question: "Wieviel Zigaretten rauchen Sie täglich?",
    answerType: ANSWERTYPE.PICKER,
    nextQuestion: 9,
    returnKeyType: 'next',
    answerPath: 'amountCigarettes',
    answers: [{
        label: '1',
        value: 1
      },
      {
        label: '2',
        value: 2
      },
      {
        label: '3',
        value: 3
      },
      {
        label: '4',
        value: 4
      },
      {
        label: '5',
        value: 5
      },
      {
        label: '6',
        value: 6
      },
      {
        label: '7',
        value: 7
      },
      {
        label: '8',
        value: 8
      },
      {
        label: '9',
        value: 9
      },
      {
        label: '10',
        value: 10
      },
      {
        label: '11',
        value: 11
      },
      {
        label: '12',
        value: 12
      },
      {
        label: '13',
        value: 13
      },
      {
        label: '14',
        value: 14
      },
      {
        label: '15',
        value: 15
      },
      {
        label: '16',
        value: 16
      },
      {
        label: '17',
        value: 17
      },
      {
        label: '18',
        value: 18
      },
      {
        label: '19',
        value: 19
      },
      {
        label: '20',
        value: 20
      },
      {
        label: 'Mehr',
        value: 'Mehr als 20'
      },
    ],
  },

  {
    question: "Vielen Dank. Ihre Daten sind jetzt als QR-Code gespeichert.",
    answerType: ANSWERTYPE.BUTTON,
    returnKeyType: 'done',
    lastQuestion: true,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Fertig',
    }],
  },

]

export default questionsAnamnese;
