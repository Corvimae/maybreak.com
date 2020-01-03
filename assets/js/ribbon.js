const getRibbonColors = () => {
  const [date] = new Date().toISOString().split('T')
  const [_year, month, day] = date.split('-');

  switch(`${month}/${day}`) {
    // Ace Awareness Week (roughly)
    case '10/22':
    case '10/23':
    case '10/24':
    case '10/25':
    case '10/26':
    case '10/27':
    case '10/28':
      return [
        '#000000',
        '#a4a4a4',
        '#ffffff',
        '#810081'
      ];

    // LGBT Day of Silence
    case '04/12':
      return [
        '#ff0018',
        '#ffa52c',
        '#ffff41',
        '#008018',
        '#0000f9',
        '#86007d'
      ]

    // Trans Day of Visibility
    case '03/31':
      return [
        '#44cdfc',
        '#f7a8b8',
        '#ffffff',
        '#f7a8b8',
        '#44cdfc'
      ]
      
    default:
      return [
        '#dd0000',
        '#00dd00',
        '#0000dd',
        '#dddd00'
      ];
  }
};

(() => {
  const ribbonColors = getRibbonColors();

  while(ribbonColors.length < 6) {
    ribbonColors.unshift('transparent');
  }

  const styleElement = document.createElement('style');

  styleElement.type = 'text/css';
  styleElement.textContent = `:root {\n${ribbonColors.map((color, index) => `  --ribbon-${index + 1}: ${color};`).join('\n')}\n}`;

  document.head.appendChild(styleElement);
})();