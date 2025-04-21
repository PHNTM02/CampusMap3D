import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Asset extends THREE.Group {
    constructor(scene) {
        super();

        this.loader = new GLTFLoader();
        this.loadAll();
    }

    loadGLTFModel(path, position, rotation, scale) {
        this.loader.load(
            path,
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(scale, scale, scale);
                model.position.set(position.x, position.y, position.z);
                model.rotation.set(rotation.x, rotation.y, rotation.z);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error(`Error loading model at ${path}:`, error);
            }
        );
    }

    loadAll() {
        this.loadGate();
        this.loadLibrary();
    }

    loadLibrary() {
        const codPath = '../public/model/building/Library.glb';
        const codPosition = new THREE.Vector3(-15.5, 30.5, 0.1);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 0.09;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    
    loadGate() {
        const gatePath = '../public/model/building/Gate 1.glb';
        const gatePosition = new THREE.Vector3(1, 4.5, 0);
        const gateRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2 - 0.05, 0);
        const gateScale = 0.18;
        this.loadGLTFModel(gatePath, gatePosition, gateRotation, gateScale);
    }
}