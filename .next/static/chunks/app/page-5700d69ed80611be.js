(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931,145],{7814:function(e,n,i){Promise.resolve().then(i.t.bind(i,8173,23)),Promise.resolve().then(i.bind(i,8035)),Promise.resolve().then(i.bind(i,2501))},8035:function(e,n,i){"use strict";var s=i(7437),t=i(6572);i(2265),n.default=()=>(0,s.jsx)("div",{className:"absolute z-1 text-left px-8 md:px-32 py-12 font-serif w-full max-w-[700px] bottom-0 ",children:(0,s.jsx)(t.e,{preRenderFirstString:!1,sequence:["Your hands are open",3e3,"Your fingers are splayed",2e3,"Your palms are to the ceiling, to the sky",2e3,"You are giving nothing.",2e3,"You are empty handed.",2e3,"You are looking upwards at a 45 degree angle, you are looking over your shoulder, you are watching your back, you are watching hers.",2e3,"You have a whistle around you neck and the ref SAYS THERES NO TIME OUT WHISTLEBLOWER.",2e3,"If you behave I will show you what's in the case.",2e3,"A variety of stolen goods and materials for making other materials actually.",2e3,"There's not a whole lot in there.",4e3,"Better not to open it.",1e3,"And protect it anyhow.",1e3,"Keep it close.",1e3,"Clutch it tightly.",1e3,"Don't wanna show too much off.",2e3,"I'm tempted but I'll hold out a little longer.",2e3,"Could always hold out a little bit longer.",3e3],wrapper:"span",omitDeletionAnimation:!0,speed:200,style:{fontSize:"4em",display:"inline-block",color:"yellow",fontSize:"20px"}})})},2501:function(e,n,i){"use strict";i.d(n,{default:function(){return c}});var s=i(7437),t=i(2265),a=i(7776),l=i(9938),r=e=>{let{children:n}=e;return(0,s.jsx)("div",{className:"h-auto w-screen min-h-screen flex flex-col justify-center items-start text-left px-[200px]",children:n})},o=i(9582),c=()=>{let e=(0,t.useRef)(null),n=(0,t.useRef)(null),i=(0,t.useRef)(null),c=!1;return(0,t.useEffect)(()=>{let i=new a.xsS,s=new a.cPb(75,window.innerWidth/window.innerHeight,.1,1e3),t=new a.CP7;t.setSize(window.innerWidth,window.innerHeight),e.current.appendChild(t.domElement),i.fog=new a.yo9(13421772,10),s.position.z=5;let r=new a.Ox3(16777215,1);i.add(r),r.position.y=10,new l.E().load("boxworldtall.gltf",e=>{e.scene.scale.set(1,1,1),e.scene.children.length&&(e.scene.children[0].material=new a.Wid({color:16777215})),i.add(e.scene)},void 0,e=>{console.error("Error loading GLTF model",e)});let h=e=>{console.log({enableControls:c}),console.log(i.fog.density),console.log(i),c&&(e.wheelDelta>0?s.position.z+=.1:s.position.z-=.1)};window.addEventListener("wheel",e=>h(e));let d=function(){requestAnimationFrame(d),t.render(i,s)};d();let u=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(console.log('Element with ID "three-d" is entering the viewport'),o.ZP.to(i.fog,{density:.01,duration:3,ease:"power4.inOut",onComplete:()=>{c=!0}}))})},{root:null,rootMargin:"0px",threshold:.05});return n.current&&u.observe(n.current),()=>{n.current&&u.unobserve(n.current)}},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{ref:e,className:"fixed inset-0"}),(0,s.jsxs)("div",{ref:i,className:"content-container absolute top-0 z-1 text-xl",children:[(0,s.jsx)(r,{children:(0,s.jsx)("h1",{children:"Addressing Interface Boundaries in Space"})}),(0,s.jsxs)(r,{children:[(0,s.jsxs)("p",{children:["The following will encourage you to imagine interfaces,"," ",(0,s.jsx)("span",{className:"bg-highlight",children:"in real life, as objects, and in their entirety."})]}),(0,s.jsx)("p",{children:"We will be looking at extension beyond the physical screen."})]}),(0,s.jsx)(r,{children:(0,s.jsxs)("h1",{children:["What is the ",(0,s.jsx)("span",{className:"bg-highlight",children:"real life"})," analog of this document?"]})}),(0,s.jsx)(r,{children:(0,s.jsxs)("div",{className:"flex flex-row w-full justify-between",children:[(0,s.jsx)("img",{src:"/down-arrow.svg",alt:"Infinity hands",width:300,className:"rotate-180"}),(0,s.jsx)("img",{src:"/down-arrow.svg",alt:"Infinity hands",width:300,className:"rotate-90"})]})}),(0,s.jsx)(r,{children:(0,s.jsx)("img",{src:"/scroll.png",alt:"Description of image",width:300})}),(0,s.jsxs)(r,{children:[(0,s.jsx)("blockquote",{children:(0,s.jsx)("i",{children:"As spatial practice, computer games are both representations of space (a formal system of relations) and representational spaces (symbolic imagery with a primarily aesthetic purpose). [...] But it indicates that the spatial representation in computer games is ambivalent and doublesided: it is both conceptual and associative."})}),(0,s.jsx)("span",{className:"block mt-10",children:"Espen Aarseth, ALLEGORIES OF SPACE The Question of Spatiality in Computer Games"})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"bg-highlight",children:"Visual interfaces leverage real life metaphors but are not constrained by them…"})}),(0,s.jsx)("p",{children:"We can use JavaScript to selectively break pretty much any real world constraints."})]}),(0,s.jsx)(r,{children:(0,s.jsx)("div",{className:"perspective-container",children:(0,s.jsx)("h2",{className:"rotate-element-2",children:(0,s.jsx)("span",{className:"bg-highlight",children:"What denial of real world constraints looks like."})})})}),(0,s.jsxs)(r,{children:[(0,s.jsxs)("p",{children:["When we introduce a third dimension, we now have to think about space"," ",(0,s.jsx)("span",{className:"bg-highlight",children:"through the screen in addition"})," ","to space outside the window plane."]}),(0,s.jsx)("div",{className:"w-full flex justify-around",children:(0,s.jsx)("div",{className:"perspective-container",children:(0,s.jsx)("img",{src:"/down-arrow.svg",alt:"Infinity hands",width:300,className:"rotate-element-3"})})})]}),(0,s.jsx)(r,{children:(0,s.jsxs)("p",{children:["And this brings us to a problem: there is no default visual bound to a 3D environment,"," ",(0,s.jsx)("span",{className:"bg-highlight",children:"you can imagine it going on forever."})]})}),(0,s.jsx)(r,{children:(0,s.jsx)("div",{className:"w-full flex justify-around mb-[500px]",children:(0,s.jsxs)("div",{className:"perspective-container",children:[(0,s.jsx)("img",{src:"/infinity.jpg",alt:"Infinity hands",width:300,className:"rotate-element-2"}),(0,s.jsxs)("h2",{className:"rotate-element",children:["We are now in an"," ",(0,s.jsx)("span",{className:"bg-highlight",children:"1.7976931348623157e+308 * 1.0000001"})," ","space."]})]})})}),(0,s.jsxs)(r,{children:[(0,s.jsxs)("h1",{ref:n,className:"",children:["This is 3D infinite scroll ...",(0,s.jsx)("i",{className:"bg-highlight",children:"Why does infinity feel so bad?"})]}),(0,s.jsx)("p",{children:"When an interface uses infinity, we can no longer understand it as an allegory to a physical object. It becomes messy, unable to be seen in its entirety. You couldn't recreate it in real life if you tried."})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("h2",{className:"",children:"Looking for answers: real life, games, paintings, dioramas."}),(0,s.jsx)("div",{className:"w-full flex justify-around",children:(0,s.jsxs)("div",{className:"perspective-container",children:[(0,s.jsx)("img",{src:"/theinteriorityofoutside.PNG",alt:"Infinity hands",width:300,className:"mt-10"}),(0,s.jsx)("img",{src:"/depthmap.png",alt:"Infinity hands",width:300,className:"rotate-element-2"})]})})]}),(0,s.jsx)(r,{children:(0,s.jsx)("i",{className:"bg-highlight",children:"Thank you"})})]})]})}}},function(e){e.O(0,[689,922,575,971,23,744],function(){return e(e.s=7814)}),_N_E=e.O()}]);