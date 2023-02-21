/* Lecture 11
 * CSCI 4611, Spring 2023, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import * as gfx from 'gophergfx'

export class MeshViewer extends gfx.GfxApp
{
    constructor()
    {
        super();
    }

    createScene(): void 
    {
        // Setup camera
        this.camera.setPerspectiveCamera(60, 1920/1080, 0.1, 10);
        this.camera.position.set(0, 0, 5);

        // Set a black background
        this.renderer.background.set(0, 0, 0);
        
        // Create an ambient light
        const ambientLight = new gfx.AmbientLight(new gfx.Color(0.25, 0.25, 0.25));
        this.scene.add(ambientLight);

        // Create a directional light
        const directionalLight = new gfx.DirectionalLight(new gfx.Color(0.5, 0.5, 0.5));
        directionalLight.position.set(-2, 1, 0)
        this.scene.add(directionalLight);

        // Add an axes display to the scene
        const axes = new gfx.Axes3(4);
        this.scene.add(axes);
    }

    update(deltaTime: number): void 
    {
        
    }

}