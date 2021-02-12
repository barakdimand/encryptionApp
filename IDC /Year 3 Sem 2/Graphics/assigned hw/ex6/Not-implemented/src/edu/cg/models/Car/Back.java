package edu.cg.models.Car;

import java.util.LinkedList;
import java.util.List;

import com.jogamp.opengl.GL2;
import edu.cg.algebra.Point;
import edu.cg.models.BoundingSphere;
import edu.cg.models.IIntersectable;
import edu.cg.models.IRenderable;
import edu.cg.models.SkewedBox;
import edu.cg.algebra.Vec;
import com.jogamp.opengl.GL2;
import com.jogamp.opengl.glu.GLU;
import com.jogamp.opengl.glu.GLUquadric;


public class Back implements IRenderable, IIntersectable {
	private SkewedBox baseBox = new SkewedBox(Specification.B_BASE_LENGTH, Specification.B_BASE_HEIGHT,
			Specification.B_BASE_HEIGHT, Specification.B_BASE_DEPTH, Specification.B_BASE_DEPTH);
	private SkewedBox backBox = new SkewedBox(Specification.B_LENGTH, Specification.B_HEIGHT_1,
			Specification.B_HEIGHT_2, Specification.B_DEPTH_1, Specification.B_DEPTH_2);
	private PairOfWheels wheels = new PairOfWheels();
	private Spolier spoiler = new Spolier();

	@Override
	public void render(GL2 gl) {
		gl.glPushMatrix();
		Materials.SetBlackMetalMaterial(gl);
		gl.glTranslated(Specification.B_LENGTH / 2.0 - Specification.B_BASE_LENGTH / 2.0, 0.0, 0.0);
		baseBox.render(gl);
		Materials.SetRedMetalMaterial(gl);
		gl.glTranslated(-1.0 * (Specification.B_LENGTH / 2.0 - Specification.B_BASE_LENGTH / 2.0),
				Specification.B_BASE_HEIGHT, 0.0);
		backBox.render(gl);
		gl.glPopMatrix();
		gl.glPushMatrix();
		gl.glTranslated(-Specification.B_LENGTH / 2.0 + Specification.TIRE_RADIUS, 0.5 * Specification.TIRE_RADIUS,
				0.0);
		wheels.render(gl);
		gl.glPopMatrix();
		gl.glPushMatrix();
		gl.glTranslated(-Specification.B_LENGTH / 2.0 + 0.5 * Specification.S_LENGTH,
				0.5 * (Specification.B_HEIGHT_1 + Specification.B_HEIGHT_2), 0.0);
		spoiler.render(gl);
		gl.glPopMatrix();

		 TODO:
		// Adding the first pipe to the back of the car
		 // gives the color black like the tires
		Materials.setMaterialTire(gl);
		GLU glu = new GLU();
		GLUquadric q = glu.gluNewQuadric();
		gl.glPushMatrix();
		// this affects the size
		gl.glTranslated(-Specification.B_LENGTH / 2 - 0.03, 0.04, 0.04);
		gl.glRotated(90.0, 0.0, 2.0, 0.0);
		// this affects the size
		glu.gluCylinder(q, (Specification.S_ROD_RADIUS - 0.003), (Specification.S_ROD_RADIUS - 0.003), Specification.S_ROD_HIEGHT - 0.02, 15, 2);
		gl.glPopMatrix();
		gl.glPushMatrix();
		// Adding the second pipe to the back of the car
		gl.glTranslated(-Specification.B_LENGTH / 2 - 0.03, 0.04, -0.04);
		gl.glRotated(90.0, 0.0, 2.0, 0.0);
		glu.gluCylinder(q, (Specification.S_ROD_RADIUS - 0.003), (Specification.S_ROD_RADIUS - 0.003), Specification.S_ROD_HIEGHT - 0.02, 15, 2);
		gl.glPopMatrix();
		glu.gluDeleteQuadric(q);

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
	public List<BoundingSphere> getBoundingSpheres() {
		// TODO:
		// s1
		// where:
		// s1 - sphere bounding the car front
		LinkedList<BoundingSphere> res = new LinkedList();
		double radius = new Vec (Specification.B_LENGTH / 2,
				Specification.B_HEIGHT / 2,
				Specification.B_DEPTH / 2).norm();
		Point center = new Point(0, Specification.B_HEIGHT / 2, 0);
		BoundingSphere sphere = new BoundingSphere(radius, center);
		sphere.setSphereColore3d(0, 0, 1);
		res.add(sphere);
		return res;
	}

}
