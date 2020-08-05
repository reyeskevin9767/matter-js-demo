//* Engine - Transition from one state to another
//* Render - Draw onto screen
//* Runner - Coordinate the Engine and World
//* World - Snapshot of the world
//* Bodies - Geometry in the world
const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const engine = Engine.create();
const { world } = engine;

//* Creates a canvas
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

//* Allows shapes to be grab
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

//* Walls
const walls = [
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
];

//* Add Walls to the world
World.add(world, walls);

//* Create a new shape
const shape = Bodies.rectangle(200, 200, 50, 50, {
  isStatic: true,
});

//* Add shape to the world
World.add(world, shape);
