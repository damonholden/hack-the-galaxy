const clue = `KILLNR OFPP INJJITIAL FUGGNRING ORPP RISSSCARRER WAXXTERMELON PAQQRT`;

const decode = code => {
  return code.replace(/([A-Z])\1/g, '').replace(/(R)/g, 'D');
};

decode(clue);

// potentially pip as ipip is kind of investment and pips are discarded from watermelon

const array = [1, 2, 3, 4, 5, 6, 'obsolete', 8, 9].filter(number => number !== 'obsolete');
