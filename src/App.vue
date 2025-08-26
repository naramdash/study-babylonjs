<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import * as BABYLON from '@babylonjs/core'
import { day01 } from './day01';

const canvasRef = useTemplateRef('canvas');

onMounted(() => {
  if (!canvasRef.value) return;

  //#region Babylon.js setup
  const canvas = canvasRef.value;
  const engine = new BABYLON.Engine(canvas, true);

  const scene = day01.code2(engine, canvas);

  engine.runRenderLoop(() => { scene.render(); });
  window.addEventListener('resize', () => { engine.resize(); });
  //#endregion

})
</script>

<template>
  <div>
    <h1>Study Babylon.js</h1>
    <canvas ref="canvas" width="800" height="800" style="border: 1px solid black;"></canvas>
  </div>
</template>
