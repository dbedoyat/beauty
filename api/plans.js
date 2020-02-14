const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }/static/img/plans/${name}.jpg${
    wrap ? ")" : ""
  }`;

export const plansApp = [
         {
           url: url("360PLAN"),
           title: "360 Plan"
         },
         {
           url: url("DOLLPLAN"),
           title: "Doll plan"
         },
         {
           url: url("OPENPLANSELECTED"),
           title: "Open plan selected"
         },
         {
           url: url("TOUR1"),
           title: "Tour 1"
         },
         {
           url: url("TOUR2"),
           title: "tour 2"
         },
         {
           url: url("TOUR3"),
           title: "Tour 3"
         }
       ];
