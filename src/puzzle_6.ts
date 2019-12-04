import { Line, Point, getCrossPoints, getWire } from "./puzzle_5";

function distance(first: Point, second: Point): number {
  return Math.abs(first.x - second.x) + Math.abs(first.y - second.y);
}

function lineLength(line: Line): number {
  return distance(line.start, line.end);
}

function isPointOnLine(point: Point, line: Line): boolean {
  return (
    (line.start.y == line.end.y &&
      line.end.y == point.y &&
      line.start.x <= point.x &&
      point.x <= line.end.x) ||
    (line.start.x == line.end.x &&
      line.start.x == point.x &&
      line.start.y <= point.y &&
      point.y <= line.end.y)
  );
}

export default function solution6(value1: string, value2: string): number {
  const wireRepr1 = value1.split(",");
  const wireRepr2 = value2.split(",");

  const wire1 = getWire(wireRepr1);
  const wire2 = getWire(wireRepr2);
  const crossPoints = getCrossPoints(wire1, wire2);

  const distances = [];

  for (const crossPoint of crossPoints) {
    let currentDistance = 0;

    for (const firstLine of wire1) {
      currentDistance += lineLength(firstLine);

      if (isPointOnLine(crossPoint, firstLine)) {
        currentDistance -= distance(firstLine.second, crossPoint);
        break;
      }
    }

    for (const secondLine of wire2) {
      currentDistance += lineLength(secondLine);

      if (isPointOnLine(crossPoint, secondLine)) {
        currentDistance -= distance(secondLine.second, crossPoint);
        distances.push(currentDistance);
        break;
      }
    }
  }

  return Math.min(...distances);
}
