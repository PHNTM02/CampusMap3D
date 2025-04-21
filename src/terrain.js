import * as THREE from 'three';
import { Road } from './asset.js';

export class Terrain extends THREE.Group {
    constructor() {
        super();
        this.terrain();
        this.asset2();    
    }

    terrain() {
        const tileSize = 100;

        const geometry = new THREE.PlaneGeometry(tileSize, tileSize, tileSize, tileSize);
        const material = new THREE.MeshBasicMaterial({ color: 0x89f5a8, wireframe: true });
        const terrain = new THREE.Mesh( geometry, material );
        terrain.position.y = -0.5;
        this.rotation.x = -Math.PI / 2;
        this.add(terrain);
    }

    asset2() {
        const road = new Road();
        this.add(road);
    }
}