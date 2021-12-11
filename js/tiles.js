export var commonElements = (tile, width, height) => {
  var pad = width/3;
  tile.fill(background_col);
  tile.rect(pad, pad, width, height);
  tile.ellipse(pad, pad, pad*2); // TL
  tile.ellipse(width+pad, pad, pad*2); // TR
  tile.ellipse(width+pad, width+pad, pad*2); // BR
  tile.ellipse(pad, width+pad, pad*2); // BL
  tile.noStroke(); // white spots
  tile.fill(foreground_col);
  tile.ellipse(pad+width/2,pad,pad);
  tile.ellipse(pad,pad+height/2,pad);
  tile.ellipse(pad+width/2,pad+height,pad);
  tile.ellipse(pad+width,pad+height/2,pad);
}

export var arcRT = (tile, width, height) => {
  var pad = width/3;
  tile.strokeWeight(pad);
  tile.strokeCap(SQUARE);
  tile.stroke(foreground_col);
  tile.noFill();
  tile.arc(pad+width, pad, width, height , HALF_PI, PI);
}

export var arcLB = (tile, width, height) => {
  var pad = width/3;
  tile.strokeWeight(pad);
  tile.strokeCap(SQUARE);
  tile.stroke(foreground_col);
  tile.noFill();
  tile.arc(pad, pad+height, width, height, PI + HALF_PI, TWO_PI); 
}

export var arcBR = (tile, width, height) => {
  var pad = width/3;
  tile.strokeWeight(pad);
  tile.strokeCap(SQUARE);
  tile.stroke(foreground_col);
  tile.noFill();
  tile.arc(pad+width, pad+height, width, height, PI, PI + HALF_PI);
}

export var arcTL = (tile, width, height) => {
  var pad = width/3;
  tile.strokeWeight(pad);
  tile.strokeCap(SQUARE);
  tile.stroke(foreground_col);
  tile.noFill();
  tile.arc(pad, pad, pad*3, pad*3, 0, HALF_PI);
}

export var vert = (tile, width, height) => {
  var pad = width/3;
  tile.strokeWeight(pad);
  tile.strokeCap(SQUARE);
  tile.stroke(foreground_col);
  tile.noFill();
  tile.line(pad+width/2, pad, pad+width/2, pad+height);
}

export var horz = (tile, width, height) => {
  var pad = width/3;
  tile.strokeWeight(pad);
  tile.strokeCap(SQUARE);
  tile.stroke(foreground_col);
  tile.noFill();
  tile.line(pad, pad+height/2, pad+width, pad+height/2);
}
// Tiles
// tile tw
export var tile15 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  horz(tile, width, height);
  arcTL(tile, width, height);
  arcLB(tile, width, height);
  return tile;
}
// tile te
export var tile14 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  horz(tile, width, height);
  arcRT(tile, width, height);
  arcBR(tile, width, height);
  return tile;
}
// tile ts
export var tile13 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  horz(tile, width, height);
  arcLB(tile, width, height);
  arcBR(tile, width, height);
  return tile;
}
// tile tn
export var tile12 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  horz(tile, width, height);
  arcTL(tile, width, height);
  arcRT(tile, width, height);
  return tile;
}
// tile fse
export var tile11 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  arcBR(tile, width, height);
  return tile;
}
// tile fnw
export var tile10 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  arcTL(tile, width, height);
  return tile;
}
// tile fsw
export var tile09 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  arcLB(tile, width, height);
  return tile;
}
// tile fne
export var tile08 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  arcRT(tile, width, height);
  return tile;
}
// tile +
export var tile07 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  vert(tile, width, height);
  horz(tile, width, height);
  return tile;
}
// tile X.
export var tile06 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  vert(tile, width, height);
  horz(tile, width, height);
  arcTL(tile, width, height);
  arcBR(tile, width, height);
  arcRT(tile, width, height);
  arcLB(tile, width, height);
  return tile;
}
// tile +.
export var tile05 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  return tile;
}
// tile |
export var tile04 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  vert(tile, width, height);
  return tile;
}
// tile -
export var tile03 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  horz(tile, width, height);
  return tile;
}
// tile /
export var tile02 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  arcTL(tile, width, height);
  arcBR(tile, width, height);
  return tile;
}
// tile \
export var tile01 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  tile.background('rgba(0,0,0,0)');
  tile.noStroke();
  tile.color(foreground_col);
  commonElements(tile, width, height);
  arcRT(tile, width, height);
  arcLB(tile, width, height);
  return tile;
}
// tile blank
export var tile00 = (width, height) => {
  var tile = createGraphics(width*1.66, height*1.66);
  return tile;
}