function verse(num) {
  for (var i = num; i >= 0; i--) {
    if (i > 2) {
      return (i + ' bottles of beer on the wall, ' + i + ' bottles of beer.\nTake one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.\n');
    } 
    else if (i === 2) {
      return (i + ' bottles of beer on the wall, ' + i + ' bottles of beer.\nTake one down and pass it around, ' + (i-1) + ' bottle of beer on the wall.\n');
    }
     else if (i === 1) {
      return (i + ' bottle of beer on the wall, ' + i + ' bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n');
    }
     else if (i === 0) {
      return ('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n');
    }
  }
}


function sing(start, end) {
  var song = '';
  end = end || 0;
  for (var i = start; i >= end; i--) {
    if (i === end && end > 0) {
      song += (i + ' bottles of beer on the wall, ' + i + ' bottles of beer.\nTake one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.\n');
    }
     else if (i == 2) {
      song += (i + ' bottles of beer on the wall, ' + i + ' bottles of beer.\nTake one down and pass it around, ' + (i-1) + ' bottle of beer on the wall.\n\n');
    } 
    else if (i === 1) {
      song += (i + ' bottle of beer on the wall, ' + i + ' bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\n');
    }
     else if (i === 0) {
      song += ('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n');
    }
     else {
      song += (i + ' bottles of beer on the wall, ' + i + ' bottles of beer.\nTake one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.\n\n');
    }
  }
  return song;
}


module.exports = {
  verse:verse, 
  sing:sing
};