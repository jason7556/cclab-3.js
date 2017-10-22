var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.setClearColor (0xf7da7a, 1);
			document.body.appendChild( renderer.domElement );


var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );



        // setup

            // cube

            var geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
            var material = new THREE.MeshNormalMaterial( { color: 0x0000ff } );
            var cube = new THREE.Mesh( geometry, material );
            var cube2 = new THREE.Mesh( geometry, material );
            var cube3 = new THREE.Mesh( geometry, material );
            var cube4 = new THREE.Mesh( geometry, material );
			scene.add (cube);
			scene.add (cube2);
			scene.add (cube3);
			scene.add (cube4);
            
            
            cube.position.x = Math.random()*8;
            cube.position.y = Math.random()*6;
            cube.position.z = Math.random()*5;

            cube2.position.x = -Math.random()*8;
            cube2.position.y = -Math.random()*6;
            cube2.position.z = Math.random()*5

            cube3.position.x = Math.random()*8;
            cube3.position.y = Math.random()*6;
            cube3.position.z = Math.random()*5

            cube4.position.x = -Math.random()*8;
            cube4.position.y = -Math.random()*6;
            cube4.position.z = Math.random()*5;
            
            // cube


            // sphere
            var geometry = new THREE.SphereGeometry( Math.random(), 32, 32 );
            var material = new THREE.MeshNormalMaterial( {color: 0xffffff } );
            var sphere = new THREE.Mesh( geometry, material );
            var sphere2 = new THREE.Mesh( geometry, material );
            scene.add( sphere );
            scene.add( sphere2 );

            sphere.position.x = Math.random()*8;
            sphere.position.y = Math.random()*6;
            sphere.position.z = Math.random()*5;

            sphere2.position.x = -Math.random()*8;
            sphere2.position.y = -Math.random()*6;
            sphere2.position.z = -Math.random()*5;



            // sphere

            // cylinder
            var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 );
            var geometry2 = new THREE.CylinderGeometry( 1, 1, 2, 32 );
            var material = new THREE.MeshNormalMaterial( {color: 0xffff00} );
            var cylinder = new THREE.Mesh( geometry, material );
            var cylinder2 = new THREE.Mesh( geometry2, material );
            scene.add( cylinder );
            scene.add( cylinder2);


            cylinder.position.x = Math.random()*8;
            cylinder.position.y = Math.random()*6;
            cylinder.position.z = Math.random()*5;
            cylinder2.position.x = -Math.random()*8;
            cylinder2.position.y = -Math.random()*6;
            cylinder2.position.z = -Math.random()*5;

            // cylinder

            // cone
           
           var geometry = new THREE.ConeGeometry( 1, 3, 80 );
           var material = new THREE.MeshNormalMaterial( {color: 0xffff00} );
           var cone = new THREE.Mesh( geometry, material );
           scene.add( cone );

           cone.position.x = Math.random()*8;
           cone.position.y = Math.random()*6;
           cone.position.z = Math.random()*5;


            // cone

            


			camera.position.z = 7;

	    // setup

             
        // update


             var animate = function () {
				requestAnimationFrame( animate );
        
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				cube.rotation.z -= 0.02;

				cube.position.z += 0.02;


				cube2.rotation.x -= 0.01;
				cube2.rotation.y += 0.03;
				cube2.rotation.z += 0.02;
                
                cube2.position.z += 0.01;

                cube3.rotation.x -= 0.03;
				cube3.rotation.y += 0.02;
				cube3.rotation.z += 0.01;
                
                cube3.position.z += 0.03;

                cube4.rotation.x -= 0.01;
				cube4.rotation.y += 0.02;
				cube4.rotation.z += 0.03;
                
                cube4.position.z += 0.01;


                if (cube.position.z > 7 ){
                   cube.position.x = Math.random()*8;
                   cube.position.y = Math.random()*6;
                   cube.position.z = -3;
                }

                if (cube2.position.z > 7 ){
                   cube2.position.x = -Math.random()*8;
                   cube2.position.y = -Math.random()*6;
                   cube2.position.z = -3;
                }

                if (cube3.position.z > 7 ){
                   cube3.position.x = Math.random()*8;
                   cube3.position.y = Math.random()*6;
                   cube3.position.z = -3;
                }

                if (cube4.position.z > 7 ){
                   cube4.position.x = -Math.random()*8;
                   cube4.position.y = -Math.random()*6;
                   cube4.position.z = -3;
                }
               



               	sphere.rotation.x += 0.01;
				sphere.rotation.y += 0.02;
				sphere.position.z += 0.03;

				sphere2.rotation.x += 0.03;
				sphere2.rotation.y += 0.02;
				sphere2.position.z += 0.01;

                
                if (sphere.position.z > 7 ){
                   sphere.position.x = Math.random()*8;
                   sphere2.position.y = Math.random()*6;
                   sphere.position.z = -3;
                }

                if (sphere2.position.z > 7 ){
                   sphere2.position.x = -Math.random()*8;
                   sphere2.position.y = -Math.random()*6;
                   sphere2.position.z = -3;
                }




				cylinder.rotation.x += 0.03;
				cylinder.rotation.y += 0.01;
				cylinder.rotation.z += 0.02;

				cylinder.position.z += 0.04;


				cylinder2.rotation.x += 0.01;
				cylinder2.rotation.y += 0.03;
				cylinder2.rotation.z += 0.03;

				cylinder2.position.z += 0.04;



				if (cylinder.position.z > 10){
                    cylinder.position.x = Math.random()*8;
                    cylinder.position.y = Math.random()*6;
					cylinder.position.z = -5;
				}

				if (cylinder2.position.z > 10){
                    cylinder2.position.x = -Math.random()*8;
                    cylinder2.position.y = Math.random()*6;
					cylinder2.position.z = -5;
				}

                


                cone.rotation.x += 0.01;
				cone.rotation.y += 0.02;
				cone.rotation.z += 0.03;

				cone.position.z += 0.03;


				if (cone.position.z > 8){

					cone.position.x = Math.random()*8;
					cone.position.y = Math.random()*6;
					cone.position.z = -5;
				}








				renderer.render(scene, camera);
			};

			animate();
        // update

