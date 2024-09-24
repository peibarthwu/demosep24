"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Slide from "./Slide";
import gsap from "gsap";

const ThreeScene = () => {
  const sceneRef = useRef(null);
  const threeDRef = useRef(null);
  const contentRef = useRef(null);

  let enableControls = false;

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.05, // Trigger when 5% of the element is visible
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);
    scene.fog = new THREE.FogExp2(0xcccccc, 10);

    camera.position.z = 5;

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(directionalLight);
    directionalLight.position.y = 10;
    // Load GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      "boxworldtall.gltf",
      (gltf) => {
        gltf.scene.scale.set(1, 1, 1); // Adjust scale as needed
        if (gltf.scene.children.length) {
          gltf.scene.children[0].material = new THREE.MeshStandardMaterial({
            color: 0xffffff, // White color in hexadecimal
          });
        }
        // console.log(gltf.scene.children[0]);
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model", error);
      }
    );

    const onScroll = (e) => {
      console.log({ enableControls });
      console.log(scene.fog.density);
      console.log(scene);
      if (enableControls) {
        if (e.wheelDelta > 0) {
          camera.position.z += 0.1;
        } else {
          camera.position.z -= 0.1;
        }
      }
    };
    window.addEventListener("wheel", (e) => onScroll(e));

    const animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element with ID "three-d" is entering the viewport');
          gsap.to(scene.fog, {
            density: 0.01,
            duration: 3,
            ease: "power4.inOut",
            onComplete: () => {
              enableControls = true;
            },
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (threeDRef.current) {
      observer.observe(threeDRef.current);
    }

    return () => {
      if (threeDRef.current) {
        observer.unobserve(threeDRef.current);
      }
      // sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div ref={sceneRef} className="fixed inset-0" />
      <div
        ref={contentRef}
        className="content-container absolute top-0 z-1 text-xl"
      >
        <Slide>
          <h1>Addressing Interface Boundaries in Space</h1>
        </Slide>

        <Slide>
          <p>
            The following will encourage you to imagine interfaces,{" "}
            <span className="bg-highlight">
              in real life, as objects, and in their entirety.
            </span>
          </p>
          <p>We will be looking at extension beyond the physical screen.</p>
        </Slide>

        <Slide>
          <h1>
            What is the <span className="bg-highlight">real life</span> analog
            of this document?
          </h1>
        </Slide>

        <Slide>
          <div className="flex flex-row w-full justify-between">
            <img
              src="/down-arrow.svg" // Path to your image
              alt="Infinity hands"
              width={300} // Desired width
              className="rotate-180"
            />
            <img
              src="/down-arrow.svg" // Path to your image
              alt="Infinity hands"
              width={300} // Desired width
              className="rotate-90"
            />
          </div>
        </Slide>

        <Slide>
          <img
            src="/scroll.png" // Path to your image
            alt="Description of image"
            width={300} // Desired width
          />
        </Slide>

        <Slide>
          <blockquote>
            <i>
              As spatial practice, computer games are both representations of
              space (a formal system of relations) and representational spaces
              (symbolic imagery with a primarily aesthetic purpose). [...] But
              it indicates that the spatial representation in computer games is
              ambivalent and doublesided: it is both conceptual and associative.
            </i>
          </blockquote>
          <span className="block mt-10">
            Espen Aarseth, ALLEGORIES OF SPACE The Question of Spatiality in
            Computer Games
          </span>
        </Slide>

        <Slide>
          <p>
            <span className="bg-highlight">
              Visual interfaces leverage real life metaphors but are not
              constrained by them…
            </span>
          </p>

          <p>
            We can use JavaScript to selectively break pretty much any real
            world constraints.
          </p>
        </Slide>

        <Slide>
          <div className="perspective-container">
            <h2 className="rotate-element-2">
              <span className="bg-highlight">
                What denial of real world constraints looks like.
              </span>
            </h2>
          </div>
        </Slide>

        <Slide>
          <p>
            When we introduce a third dimension, we now have to think about
            space{" "}
            <span className="bg-highlight">through the screen in addition</span>{" "}
            to space outside the window plane.
          </p>
          <div className="w-full flex justify-around">
            <div className="perspective-container">
              <img
                src="/down-arrow.svg" // Path to your image
                alt="Infinity hands"
                width={300} // Desired width
                className="rotate-element-3"
              />
            </div>
          </div>
        </Slide>

        <Slide>
          <p>
            And this brings us to a problem: there is no default visual bound to
            a 3D environment,{" "}
            <span className="bg-highlight">
              you can imagine it going on forever.
            </span>
          </p>
        </Slide>

        <Slide>
          <div className="w-full flex justify-around mb-[500px]">
            <div className="perspective-container">
              <img
                src="/infinity.jpg" // Path to your image
                alt="Infinity hands"
                width={300} // Desired width
                className="rotate-element-2"
              />
              <h2 className="rotate-element">
                We are now in an{" "}
                <span className="bg-highlight">
                  1.7976931348623157e+308 * 1.0000001
                </span>{" "}
                space.
              </h2>
            </div>
          </div>
        </Slide>

        <Slide>
          <h1 ref={threeDRef} className="">
            This is 3D infinite scroll ...
            <i className="bg-highlight">Why does infinity feel so bad?</i>
          </h1>

          <p>
            When an interface uses infinity, we can no longer understand it as
            an allegory to a physical object. It becomes messy, unable to be
            seen in its entirety. You couldn't recreate it in real life if you
            tried.
          </p>
        </Slide>

        <Slide>
          <h2 className="">
            Looking for answers: real life, games, paintings, dioramas.
          </h2>
          <div className="w-full flex justify-around">
            <div className="perspective-container">
              <img
                src="/theinteriorityofoutside.PNG" // Path to your image
                alt="Infinity hands"
                width={300} // Desired width
                className="mt-10"
              />
              <img
                src="/depthmap.png" // Path to your image
                alt="Infinity hands"
                width={300} // Desired width
                className="rotate-element-2"
              />
            </div>
          </div>
        </Slide>

        <Slide>
          <i className="bg-highlight">Thank you</i>
        </Slide>
      </div>
    </>
  );
};

export default ThreeScene;
