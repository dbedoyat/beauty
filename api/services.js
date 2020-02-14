const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }/static/img/services/${name}.jpg${
    wrap ? ")" : ""
  }`;

export const servicesApp = [
         {
           url: url("360LIPO"),
           title: "Lipo"
         },
         {
           url: url("ABS"),
           title: "ABS"
         },
         {
           url: url("BOOTY"),
           title: "Booty"
         },
         {
           url: url("BOTOX"),
           title: "Botox"
         },
         {
           url: url("BREAST"),
           title: "Breast"
         },
         {
           url: url("CHEECK"),
           title: "Cheeck"
         },
         {
           url: url("CHIN"),
           title: "Chin"
         },
         {
           url: url("HAIR"),
           title: "Hair"
         },
         {
           url: url("LASHES"),
           title: "Lashes"
         },
         {
           url: url("LIPS"),
           title: "Lashes"
         },
         {
           url: url("NOSE"),
           title: "Nose"
         },
         {

           url: url("PLASMA"),
           title: "Plasma"
         },
         {

           url: url("RADIO"),
           title: "Radio"
         },
         {

           url: url("TEETHS"),
           title: "Teeths"
         }
       ];
