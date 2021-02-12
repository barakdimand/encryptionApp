package edu.cg.models.Car;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import com.jogamp.opengl.*;

import edu.cg.algebra.Point;
import edu.cg.models.BoundingSphere;
import edu.cg.models.IIntersectable;
import edu.cg.models.IRenderable;

/**
 * A F1 Racing Car.
 *
 */
public class F1Car implements IRenderable, IIntersectable {
	// TODO : Add new design features to the car.
	// Remember to include a ReadMe file specifying what you implemented.
	Center carCenter = new Center();
	Back carBack = new Back();
	Front carFront = new Front();

	@Override
	public void render(GL2 gl) {
		carCenter.render(gl);
		gl.glPushMatrix();
		gl.glTranslated(-Specification.B_LENGTH / 2.0 - Specification.C_BASE_LENGTH / 2.0, 0.0, 0.0);
		carBack.render(gl);
		gl.glPopMatrix();
		gl.glPushMatrix();
		gl.glTranslated(Specification.F_LENGTH / 2.0 + Specification.C_BASE_LENGTH / 2.0, 0.0, 0.0);
		carFront.render(gl);
		gl.glPopMatrix();

	}

	@Override
	public String toString() {
		return "F1Car";
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
		// s1 -> s2 -> s3 -> s4
		// where:
		// s1 - sphere bounding the whole car
		// s2 - sphere bounding the car front
		// s3 - sphere bounding the car center
		// s4 - sphere bounding the car back
		//
		// * NOTE:
		// All spheres should be adapted so that they are place relative to
		// the car model coordinate system.
		LinkedList<BoundingSphere> res = new LinkedList<>();

		// sphere bounding the whole car
		Point p = new Point (0, Specification.B_HEIGHT / 2.0, 0);
		BoundingSphere carBound = new BoundingSphere (Specification.F_LENGTH + Specification.F_BUMPER_LENGTH, p);
		res.add(carBound);

		// sphere bounding the car front
		double frontTransp = (Specification.F_LENGTH / 2.0) + (Specification.C_BASE_LENGTH / 2.0);
		BoundingSphere frontSphere = carFront.getBoundingSpheres().get(0);
		frontSphere.translateCenter(frontTransp,0,0);
		res.add(frontSphere);

		// sphere bounding the car center
		res.addAll(carCenter.getBoundingSpheres());

		// sphere bounding the car back
		double backTransp = (-Specification.B_LENGTH / 2.0) - (Specification.C_BASE_LENGTH / 2.0);
		BoundingSphere backSphere = carBack.getBoundingSpheres().get(0);
		backSphere.translateCenter(backTransp,0,0);
		backSphere.setSphereColore3d(0,0,1);
		res.add(backSphere);

		return res;
	}
}
