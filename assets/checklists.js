export const VORBEREITUNG = "Vorbereitung";
export const AUFENTHALT = "Aufenthalt";

const checklistdata = {
  [VORBEREITUNG]: [{
      title: "Persönliche Dokumente",
      description: "Versicherungskarte, Personalausweis",
      checked: false
    },
    {
      title: "Einweisungsschein",
      description: "mit Kostenübernahme Ihrer gesetzlichen KV",
      checked: false
    },
    {
      title: "Akuteller Medikationsplan",
      description: "oder Medikamentenliste",
      checked: false
    },
    {
      title: "Informationen Vorgeschichte",
      description: "z.B. Unfalldatum, Beschwerdedauer, ...",
      checked: false
    },
    {
      title: "Röntgenbilder, MRT-/ CT-Bilder",
      description: "Möglichst auf CD",
      checked: false
    },
    {
      title: "Laborwerte",
      description: "Untersuchungsbefunde & Berichte",
      checked: false
    },
    {
      title: "Medizinische Ausweise",
      description: "Möglichst auf CD",
      checked: false
    },
    {
      title: "Juristische Dokumente",
      description: "z.B. Patientenverfügung, Vorsorgevollmacht",
      checked: false
    },
    {
      title: "Kontakdaten Angehöriger",
      description: "Name und Telefonnummer",
      checked: false
    }
  ],
  [AUFENTHALT]: [{
      title: "Informieren Sie Freunde & Verwandte",
      description: "über Ihren Aufenthalt",
      checked: false
    },
    {
      title: "Schlüssel hinterlegen",
      description: "Für Notfälle und Anderes",
      checked: false
    },
    {
      title: "Postlagerung sicherstellen",
      description: "durch vertraute Person",
      checked: false
    },
    {
      title: "Betreuung und Hilfsmittel organisieren",
      description: "eventuell nach Aufenthalt notwendig",
      checked: false
    },
  ]
};

export default checklistdata;
