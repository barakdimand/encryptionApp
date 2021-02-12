package edu.cg.models.Car;

import java.util.LinkedList;
import java.util.List;

import com.jogamp.opengl.GL2;
import edu.cg.algebra.Point;
import edu.cg.models.BoundingSphere;
import edu.cg.models.IIntersectable;
import edu.cg.models.IRenderable;
import edu.cg.algebra.Vec;


public class Front implements IRenderable, IIntersectable {
	private FrontHood hood = new FrontHood();
	private PairOfWheels wheels = new PairOfWheels();
	private FrontBumber bumper = new FrontBumber();

	@Override
	public void render(GL2 gl) {

		gl.glPushMatrix();
		// Render hood - Use Red Material.
		gl.glTranslated(-Specification.F_LENGTH / 2.0 + Specification.F_HOOD_LENGTH / 2.0, 0.0, 0.0);
		hood.render(gl);
		// Render the wheels.
		gl.glTranslated(Specification.F_HOOD_LENGTH / 2.0 - 1.25 * Specification.TIRE_RADIUS,
				0.5 * Specification.TIRE_RADIUS, 0.0);
		wheels.render(gl);
		// Render the bumper
		// TODO:
		gl.glTranslated((1.25 * Specification.TIRE_RADIUS) + (Specification.F_BUMPER_LENGTH / 2.0),
				-Specification.TIRE_RADIUS / 2.0,
				0.0);
		bumper.render(gl);

		gl.glPopMatrix();
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
		LinkedList<BoundingSphere> res = new LinkedList<>();
		double radius = new Vec(Specification.F_LENGTH * 0.5,
				Specification.F_HEIGHT * 0.5,
				Specification.F_DEPTH * 0.5).norm();
		Point center = new Point(0, Specification.F_HEIGHT * 0.5, 0);
		BoundingSphere bound = new BoundingSphere(radius, center);
		bound.setSphereColore3d(1, 0, 0);
		res.add(bound);
		return res;
	}

	@Override
	public String toString() {
		return "CarFront";
	}
}
