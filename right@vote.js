class Instrument {
  constructor(weight, volume, baseValue) {
    this.weight = weight;
    this.volume = volume;
    this.baseValue = baseValue;
  }
}


const instruments = [
  new Instrument(3, 2, 10),
  new Instrument(4, 3, 15),
  new Instrument(2, 1, 8),
  new Instrument(5, 4, 20)
];

const payloadCapacity = 10;
const volumeCapacity = 7;

function selectInstruments() {
  let selectedInstruments = [];
  let totalWeight = 0;
  let totalVolume = 0;
  let totalValue = 0;


  instruments.sort((a, b) => b.baseValue - a.baseValue);

  for (let instrument of instruments) {
    if (totalWeight + instrument.weight <= payloadCapacity && totalVolume + instrument.volume <= volumeCapacity) {
      selectedInstruments.push(instrument);
      totalWeight += instrument.weight;
      totalVolume += instrument.volume;
      totalValue += instrument.baseValue;
    }
  }

  return {
    selectedInstruments,
    totalWeight,
    totalVolume,
    totalValue
  };
}

const result = selectInstruments();

console.log("Selected Instruments:");
result.selectedInstruments.forEach(instrument => {
  console.log(`Instrument: Weight - ${instrument.weight} kg, Volume - ${instrument.volume} m^3, Base Scientific Value - ${instrument.baseValue}`);
});
console.log(`Total Weight: ${result.totalWeight} kg`);
console.log(`Total Volume: ${result.totalVolume} m^3`);
console.log(`Total Scientific Value: ${result.totalValue}`);
