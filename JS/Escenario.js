const scene = new THREE.Scene();
var loader = new THREE.TextureLoader()
loader.load('../Imagenes/Fondo.jpg', function(textura){
	scene.background = textura;
}); 

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//Burbujas
const geometry = new THREE.SphereGeometry( 40, 40, 40);

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./Imagenes/textura-burbuja.jpg');
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

 const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
sphere.position.set( 500, 400, 300);
sphere.opacity = (0.5);

const  sphere1  = new THREE.Mesh( geometry, material );
scene.add(  sphere1  );
sphere1.position.set( -160, 300, 100);

const  sphere2  = new THREE.Mesh( geometry, material );
scene.add(  sphere2  );
sphere2.position.set( 200, -120, 360);

const  sphere3  = new THREE.Mesh( geometry, material );
scene.add(  sphere3  );
sphere3.position.set( -700, -500);

const  sphere4  = new THREE.Mesh( geometry, material );
scene.add(  sphere4  );
sphere4.position.set( -1040, 200);

const  sphere5  = new THREE.Mesh( geometry, material );
scene.add(  sphere5  );
sphere5.position.set( 730, -290, 280); 

//modelo 3d
const gltfLoader = new THREE.GLTFLoader();

//Raccon
gltfLoader.load('../Imagenes/Racoon/Racoon.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(105,105,105);

    loaderObjeto.position.z =450;
    loaderObjeto.position.y =-190;
    loaderObjeto.position.x =-150;
    scene.add(loaderObjeto);

    console.log('carga completa');
    
    //Dragcontrols
let objects = [sphere,sphere1,sphere2,sphere3,sphere4,sphere5,loaderObjeto]

const DragControls = new THREE.DragControls( objects, camera, renderer.domElement );
DragControls.enabled = true;
DragControls.deactivate();
DragControls.activate();

DragControls.addEventListener("hoveron", function (event){
    event.object.material.wireframe = true;
    event.object.scale.y *=1;
});
DragControls.addEventListener("hoveroff", function (event){
     event.object.material.wireframe = false;
     event.object.scale.y /=1;
 });

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error');
}
); 

//Powolf
gltfLoader.load('../Imagenes/Powolf/Wolf.gltf',
(gltf) =>{
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(0.2, 0.2, 0.2);

    loaderObjeto2.position.y =50;
    loaderObjeto2.position.z =60;
    loaderObjeto2.position.x =150;
    scene.add(loaderObjeto2);
    
    console.log('carga completa');

//Dragcontrols
let objects = [loaderObjeto2]

const DragControls = new THREE.DragControls( objects, camera, renderer.domElement );
DragControls.enabled = true;
DragControls.deactivate();
DragControls.activate();

DragControls.addEventListener("hoveron", function (event){
    event.object.material.wireframe = true;
    event.object.scale.y *=1;
});
DragControls.addEventListener("hoveroff", function (event){
     event.object.material.wireframe = false;
     event.object.scale.y /=1;
 });

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error');
}
);

//Carga modelo 3D Monster
gltfLoader.load('../Imagenes/Monstruo/Monstruo.gltf',
(gltf) =>{
    var loaderObjeto3 = gltf.scene;
    loaderObjeto3.scale.set(5,5,5)
    loaderObjeto3.position.z = 890; 
    loaderObjeto3.position.y = -18;
    loaderObjeto3.position.x =62;
    scene.add(loaderObjeto3);
    
    console.log('carga completa');

//Dragcontrols
let objects = [loaderObjeto3]

const DragControls = new THREE.DragControls( objects, camera, renderer.domElement );
DragControls.enabled = true;
DragControls.deactivate();
DragControls.activate();

DragControls.addEventListener("hoveron", function (event){
    event.object.material.wireframe = true;
    event.object.scale.y *=1;
});
DragControls.addEventListener("hoveroff", function (event){
     event.object.material.wireframe = false;
     event.object.scale.y /=1;
 });

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log(error);
}
);

//luces
const Light1 = new THREE.DirectionalLight(0xffffff, 1)
Light1.position.set(6,6,6)
scene.add(Light1)

const al = new THREE.AmbientLight(0xffffff,1)
scene.add(al)

camera.position.z = 950;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
