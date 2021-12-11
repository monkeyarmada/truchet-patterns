const s = ( sketch ) => {
  const background_col = 'grey';
  const foreground_col = 'lightgrey';
  sketch.setup = () => {
    const tile_size = 50;
    const width = 5;
    const height = 5;
    sketch.strokeCap(sketch.SQUARE);
    
    sketch.createCanvas(width*tile_size+tile_size, height*tile_size+tile_size);
    sketch.background(background_col);
    const tiles = [
      tile15,
      tile14,
      tile13,
      tile12,
      tile11,
      tile10,
      tile09,
      tile08,
      tile07,
      tile06,
      tile05,
      tile04,
      tile03,
      tile02,
      tile01,
      tile00
    ];
    let pad = 12;
    for (x = 0; x < width; x++) {
      for (y = 0; y < height; y++) {
        const t = tiles[sketch.round(sketch.random(0, tiles.length-1))];
        sketch.image(t(tile_size, tile_size), x*tile_size+pad, y*tile_size+pad);
      }
    }
  }
  
  sketch.draw = () => {
  
  }
  var commonElements = (tile, width, height) => {
    var pad = width/3;
    tile.fill(background_col);
    tile.rect(pad, pad, width, height);
    tile.noStroke();
    tile.fill(foreground_col);
    tile.ellipse(pad+width/2,pad,pad);
    tile.ellipse(pad,pad+height/2,pad);
    tile.ellipse(pad+width/2,pad+height,pad);
    tile.ellipse(pad+width,pad+height/2,pad);
  }

  var arcRT = (tile, width, height) => {
    var pad = width/3;
    tile.strokeWeight(pad);
    
    tile.stroke(foreground_col);
    tile.noFill();
    tile.arc(pad+width, pad, width, height , sketch.HALF_PI, sketch.PI);
  }

  var arcLB = (tile, width, height) => {
    var pad = width/3;
    tile.strokeWeight(pad);
    
    tile.stroke(foreground_col);
    tile.noFill();
    tile.arc(pad, pad+height, width, height, sketch.PI + sketch.HALF_PI, sketch.TWO_PI); 
  }

  var arcBR = (tile, width, height) => {
    var pad = width/3;
    tile.strokeWeight(pad);
    
    tile.stroke(foreground_col);
    tile.noFill();
    tile.arc(pad+width, pad+height, width, height, sketch.PI, sketch.PI + sketch.HALF_PI);
  }

  var arcTL = (tile, width, height) => {
    var pad = width/3;
    tile.strokeWeight(pad);
    
    tile.stroke(foreground_col);
    tile.noFill();
    tile.arc(pad, pad, pad*3, pad*3, 0, sketch.HALF_PI);
  }

  var vert = (tile, width, height) => {
    var pad = width/3;
    tile.strokeWeight(pad);
    
    tile.stroke(foreground_col);
    tile.noFill();
    tile.line(pad+width/2, pad, pad+width/2, pad+height);
  }

  var horz = (tile, width, height) => {
    var pad = width/3;
    tile.strokeWeight(pad);
    
    tile.stroke(foreground_col);
    tile.noFill();
    tile.line(pad, pad+height/2, pad+width, pad+height/2);
  }
  // Tiles
  // tile tw
  var tile15 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
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
  var tile14 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
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
  var tile13 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
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
  var tile12 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
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
  var tile11 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    tile.background('rgba(0,0,0,0)');
    tile.noStroke();
    tile.color(foreground_col);
    commonElements(tile, width, height);
    arcBR(tile, width, height);
    return tile;
  }
  // tile fnw
  var tile10 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    tile.background('rgba(0,0,0,0)');
    tile.noStroke();
    tile.color(foreground_col);
    commonElements(tile, width, height);
    arcTL(tile, width, height);
    return tile;
  }
  // tile fsw
  var tile09 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    tile.background('rgba(0,0,0,0)');
    tile.noStroke();
    tile.color(foreground_col);
    commonElements(tile, width, height);
    arcLB(tile, width, height);
    return tile;
  }
  // tile fne
  var tile08 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    tile.background('rgba(0,0,0,0)');
    tile.noStroke();
    tile.color(foreground_col);
    commonElements(tile, width, height);
    arcRT(tile, width, height);
    return tile;
  }
  // tile +
  var tile07 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    tile.background('rgba(0,0,0,0)');
    tile.noStroke();
    tile.color(foreground_col);
    commonElements(tile, width, height);
    vert(tile, width, height);
    horz(tile, width, height);
    return tile;
  }
  // tile X.
  var tile06 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
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
  var tile05 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    tile.background('rgba(0,0,0,0)');
    tile.noStroke();
    tile.color(foreground_col);
    commonElements(tile, width, height);
    return tile;
  }
  // tile |
  var tile04 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    tile.background('rgba(0,0,0,0)');
    tile.noStroke();
    tile.color(foreground_col);
    commonElements(tile, width, height);
    vert(tile, width, height);
    return tile;
  }
  // tile -
  var tile03 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    tile.background('rgba(0,0,0,0)');
    tile.noStroke();
    tile.color(foreground_col);
    commonElements(tile, width, height);
    horz(tile, width, height);
    return tile;
  }
  // tile /
  var tile02 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    tile.background('rgba(0,0,0,0)');
    tile.noStroke();
    tile.color(foreground_col);
    commonElements(tile, width, height);
    arcTL(tile, width, height);
    arcBR(tile, width, height);
    return tile;
  }
  // tile \
  var tile01 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    tile.background('rgba(0,0,0,0)');
    tile.noStroke();
    tile.color(foreground_col);
    commonElements(tile, width, height);
    arcRT(tile, width, height);
    arcLB(tile, width, height);
    return tile;
  }
  // tile blank
  var tile00 = (width, height) => {
    var tile = sketch.createGraphics(width*1.66, height*1.66);
    return tile;
  }
}

let myp5 = new p5(s);