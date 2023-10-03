// TODO: fix types

interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// Awaited<LukeSkywalker>
// export const fetchLukeSkywalker = () => {
//   return fetch("https://swapi.dev/api/people/1").then((res) => res.json()).then(data => );
// }

// export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
//   try {
//     const data: User[] = await fetch("https://swapi.dev/api/people/1").then(
//       (res) => {
//         return res.json(); // data
//       }
//     );

//     // TIP
//     // z.parse(data)

//     const data2 = await fetch("https://swapi.dev/api/people/1").then((res) => {
//       return res.json(); // data
//     });
//     return data;
//   } catch {
//     console.error();
//   }
// };

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};
