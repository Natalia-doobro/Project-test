const element = document.getElementById('sum-money');
const  patternMask = {
    mask: 'num',
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: ' '
      }
    }
};
const mask = IMask(element, patternMask);
