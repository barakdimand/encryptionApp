package edu.cg.models.Car;

import com.jogamp.opengl.GL2;

import com.jogamp.opengl.glu.GLU;
import com.jogamp.opengl.glu.GLUquadric;
import edu.cg.models.IRenderable;
import edu.cg.models.SkewedBox;

public class FrontBumber implements IRenderable {

	private SkewedBox bumper = new SkewedBox(Specification.F_BUMPER_LENGTH, Specification.F_BUMPER_HEIGHT_1,
			Specification.F_BUMPER_HEIGHT_2, Specification.F_BUMPER_DEPTH, Specification.F_BUMPER_DEPTH);

	private SkewedBox bumperWings = new SkewedBox(Specification.F_BUMPER_LENGTH, Specification.F_BUMPER_WINGS_HEIGHT_1,
			Specification.F_BUMPER_WINGS_HEIGHT_2, Specification.F_BUMPER_WINGS_DEPTH, Specification.F_BUMPER_WINGS_DEPTH);


	private void renderWing(GL2 gl, GLU glu, GLUquadric quad) {
		gl.glPushMatrix();
		Materials.SetBlackMetalMaterial(gl);
		bumperWings.render(gl);

		Materials.SetRedMetalMaterial(gl);
		gl.glTranslated(0, Specification.F_BUMPER_WINGS_DEPTH * 0.5, 0);
		glu.gluSphere(quad, Specification.F_BUMPER_WINGS_DEPTH / 2.5, 25, 25);
		gl.glPopMatrix();
	}

	@Override
	public void render(GL2 gl) {
		// TODO:
		// Remember the dimensions of the bumper, this is important when you
		// combine the bumper with the hood.
		GLU glu = new GLU();
		GLUquadric quad = glu.gluNewQuadric();
		gl.glPushMatrix();
		Materials.SetBlackMetalMaterial(gl);
		bumper.render(gl);
        // Render first wing
		gl.glTranslated(0.0,
				0.0,
				Specification.F_BUMPER_DEPTH * 0.5 + Specification.F_BUMPER_WINGS_DEPTH * 0.5);
		renderWing(gl, glu, quad);
		// Render second wing
		gl.glTranslated(0.0,
				0.0,
				-(Specification.F_BUMPER_DEPTH * 0.5 + Specification.F_BUMPER_WINGS_DEPTH * 0.5));
		renderWing(gl, glu, quad);

		gl.glPopMatrix();
		glu.gluDeleteQuadric(quad);
	}

	@Override
	public void init(GL2 gl) {
	}

	/**
	 * Destroy the model and free resources. This should be used
	 * to destroy textures (if any).
	 *
	 * @param gl GL context
	 */
	@Override
	public void destroy(GL2 gl) {

	}

	@Override
	public String toString() {
		return "FrontBumper";
	}

}
