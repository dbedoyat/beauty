const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }/static/img/rooms/${name}.jpg${
    wrap ? ")" : ""
  }`;

export const roomsApp = [
         {
           url: url("ROOM1"),
           title: "Single Room"
         },
         {
           url: url("ROOM2"),
           title: "Single room"
         },
         {
           url: url("ROOM3"),
           title: "Shared room"
         }
       ];
