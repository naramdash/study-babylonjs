import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  ImportMeshAsync,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";

/**
 * https://doc.babylonjs.com/features/introductionToFeatures/chap1/first_scene/
 *
 * SUPER BASIC
 */
function code1(engine: Engine, canvas: HTMLCanvasElement) {
  const scene = new Scene(engine);

  const camera = new ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.5,
    3,
    new Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);

  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  const box = MeshBuilder.CreateBox("box", {}, scene);

  return scene;
}

/**
 * https://doc.babylonjs.com/features/introductionToFeatures/chap1/first_import/
 */
function code2(engine: Engine, canvas: HTMLCanvasElement) {
  const scene = new Scene(engine);

  const camera = new ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.5,
    15,
    new Vector3(0, 0, 0)
  );
  camera.attachControl(canvas, true);
  const light = new HemisphericLight("light", new Vector3(1, 1, 0));

  ImportMeshAsync(
    "https://assets.babylonjs.com/meshes/both_houses_scene.babylon",
    scene,
    {
      meshNames: "semi_house",
    }
  );

  return scene;
}

export const day01 = {
  code1,
  code2,
};
