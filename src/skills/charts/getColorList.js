const STATIC_COLORS = ["#FFF700", "	#FF3855", "	#5DADEC", "	#87FF2A", "	#FF007C", "	#9C51B6"];

const getColorList = size => {
  const colors = [...STATIC_COLORS];

  for (let idx = 3; idx < size; idx += 1) {
    colors.push(`hsl(${Math.round(Math.random() * 360)}, 33%, 66%)`);
  }

  return colors.slice(0, size);
};

export default getColorList;
