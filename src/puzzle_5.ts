export class Point {
  constructor(readonly x: number, readonly y: number) {}
}

export class Line {
  readonly first: Point;
  readonly second: Point;

  readonly start: Point;
  readonly end: Point;

  constructor(start: Point, end: Point) {
    this.first = start;
    this.second = end;

    if ((start.y == end.y && start.x < end.x) || (start.x == end.x && start.y < end.y)) {
      this.start = start;
      this.end = end;
    } else {
      this.end = start;
      this.start = end;
    }
  }
}

function getCrossPointsForLine(first: Line, second: Line): Array<Point> {
  if (
    first.start.y == first.end.y &&
    second.start.x == second.end.x &&
    first.start.x <= second.start.x &&
    second.start.x <= first.end.x &&
    second.start.y <= first.start.y &&
    first.start.y <= second.end.y
  ) {
    return [new Point(second.start.x, first.start.y)];
  }

  if (
    first.start.x == first.end.x &&
    second.start.y == second.end.y &&
    first.start.y <= second.start.y &&
    second.start.y <= first.end.y &&
    second.start.x <= first.start.x &&
    first.start.x <= second.end.x
  ) {
    return [new Point(first.start.x, second.start.y)];
  }

  return [];
}

export function getCrossPoints(wire1: Array<Line>, wire2: Array<Line>): Array<Point> {
  let crossPoints = [];

  for (const line1 of wire1) {
    for (const line2 of wire2) {
      crossPoints = crossPoints.concat(
        getCrossPointsForLine(line1, line2).filter(point => point.x != 0 && point.y != 0),
      );
    }
  }

  return crossPoints;
}

function getNextPoint(previousPoint: Point, newInput: string): Point {
  const direction = newInput[0];
  const value = Number(newInput.slice(1));

  if (direction == 'R') {
    return new Point(previousPoint.x + value, previousPoint.y);
  } else if (direction == 'L') {
    return new Point(previousPoint.x - value, previousPoint.y);
  } else if (direction == 'U') {
    return new Point(previousPoint.x, previousPoint.y + value);
  } else if (direction == 'D') {
    return new Point(previousPoint.x, previousPoint.y - value);
  }
}

export function getWire(wireRepr: Array<string>): Array<Line> {
  const wire = [];
  let previousPoint = new Point(0, 0);

  for (const newInput of wireRepr) {
    const nextPoint = getNextPoint(previousPoint, newInput);
    wire.push(new Line(previousPoint, nextPoint));
    previousPoint = nextPoint;
  }

  return wire;
}

export default function solution1(line1: string, line2: string): number {
  const wireRepr1 = line1.split(',');
  const wireRepr2 = line2.split(',');

  const wire1 = getWire(wireRepr1);
  const wire2 = getWire(wireRepr2);

  let minimalDistance = Infinity;

  for (const crossedPoint of getCrossPoints(wire1, wire2)) {
    const distance = Math.abs(crossedPoint.x) + Math.abs(crossedPoint.y);

    if (distance < minimalDistance) {
      minimalDistance = distance;
    }
  }

  return minimalDistance;
}
