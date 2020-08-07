function garden(garden){
  let people = {};
  const names = ['alice', 'bob', 'charlie', 'david', 'eve', 'fred', 'ginna', 'harriet', 'ienna', 'joseph', 'kinkade', 'larry'];

  let garden1;
  let garden2;
  [garden1, garden2] = garden.split('\n');
  garden1 = parseGarden(garden1);
  garden2 = parseGarden(garden2);
  for (let i = 0; i < garden1.length; i++) {
    people[names[i]] = [garden1[i], garden2[i]];
  }

  for (person in people) {
    people[person] = parsePlants(people[person]);
  }

  return people;

  function parsePlants(plantArr) {
    const LETTER_TO_PLANT = {
      V: 'Violet',
      G: 'Grass',
      C: 'Carrot',
      R: 'Radishes',
    }

    let plants = plantArr.join('');
    let translatedPlants = [];
    for (let i = 0; i < plants.length; i++) {
      translatedPlants.push(LETTER_TO_PLANT[plants[i]]);
    }
  
    return translatedPlants;
  }

  function parseGarden(gardenStr) {
    let parsed = [];
    let iterator = '';
    for (let i = 0; i < gardenStr.length; i++) {
      let char = gardenStr[i];
      iterator += char;
      if (i % 2 >= 1) {
        parsed.push(iterator);
        iterator = '';
      }
    }

    return parsed;
  }
}

garden("VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV").roger;
