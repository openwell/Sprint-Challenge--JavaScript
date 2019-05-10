// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(value) {
    this.length = value.length;
    this.width = value.width;
    this.height = value.height;
  }
  volume = function() {
    return this.length * this.width * this.height;
  };

  surfaceArea = function() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  };
}

let cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
  constructor(value) {
    super(value);
  }
  volume = function() {
    return (this.width**3);
  };

  surfaceArea = function() {
    return 6*(this.width**2);
  }
}
let cuboid2 = new CubeMaker({ length: 4, width: 5, height: 5 });
console.log(cuboid2.volume());
console.log(cuboid2.surfaceArea());