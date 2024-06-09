(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},55589:e=>{e.exports={style:{fontFamily:"'__Merriweather_ac87cd', '__Merriweather_Fallback_ac87cd'",fontWeight:700,fontStyle:"normal"},className:"__className_ac87cd"}},16305:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>m,tree:()=>u});var r=t(50482),n=t(69108),i=t(62563),a=t.n(i),l=t(68300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,79994)),"D:\\equip-velo-for-nextjs\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,93384)),"D:\\equip-velo-for-nextjs\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\equip-velo-for-nextjs\\app\\page.js"],d="/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},61393:(e,s,t)=>{Promise.resolve().then(t.bind(t,791))},96755:(e,s,t)=>{Promise.resolve().then(t.bind(t,50258))},82119:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,26840,23)),Promise.resolve().then(t.t.bind(t,38771,23)),Promise.resolve().then(t.t.bind(t,13225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,43982,23))},791:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>j});var r=t(95344),n=t(3729);t(35190);var i=t(56506),a=t(89410);let l=function({picture:e,title:s,href:t}){return r.jsx(i.default,{href:t,passHref:!0,className:"card",children:(0,r.jsxs)("div",{className:"card__container",children:[r.jsx(a.default,{src:e,alt:`Image ${s}`,width:100,height:100,unoptimized:!0}),r.jsx("div",{className:"card__container__title",children:r.jsx("h3",{className:"card__container__title__span",children:s})})]})})};t(43959);var o=t(615);let u=function(){let[e,s]=(0,n.useState)([]);return(0,n.useEffect)(()=>{fetch(`${o.F}/articles/latest`).then(e=>e.json()).then(e=>s(e))},[]),(0,r.jsxs)("section",{className:"articles-grid",children:[r.jsx("h2",{children:"Les derniers articles"}),r.jsx("div",{className:"grid-container",children:e.map(e=>r.jsx(l,{title:e.title,picture:e.file,href:"casques"===e.tag?`/casques/${e.slug}`:"lunettes"===e.tag?`/lunettes/${e.slug}`:"vetements"===e.tag?`/vetements/${e.slug}`:"chaussures"===e.tag?`/chaussures/${e.slug}`:`/article/${e.slug}`},e._id))}),r.jsx("div",{className:"more-articles",children:r.jsx("a",{href:"/articles",children:"Voir tous les articles"})})]})};var c=t(55589),d=t.n(c);t(56722);let p=function(){return r.jsx("section",{className:"banner",children:r.jsx("div",{className:"banner__flex",children:r.jsx("h2",{className:d().className,children:"Roulez avec style et en s\xe9curit\xe9"})})})};t(80819);let m={src:"/_next/static/media/i_love_bike.8751b4dd.webp",height:2480,width:3507,blurDataURL:"data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoIAAYAAkA4JZACdEf/gbhhvZgA/uxRcLJI45EAjiGFSjrKDtPW1nOoBI2kEAx0yaWrwbg8xf+fS31iPsWVya09ooyuqrkAAAA=",blurWidth:8,blurHeight:6},h={src:"/_next/static/media/logolist.8154fdc9.webp",height:518,width:915,blurDataURL:"data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAAkA4JaQAAp2qQLrwAP7woD6Q734DFf+A1qAtqBK86BAAAA==",blurWidth:8,blurHeight:5},x=function(){return(0,r.jsxs)("section",{className:"hometext",children:[(0,r.jsxs)("div",{className:"hometext__container",children:[r.jsx("h2",{children:"Comment bien choisir son \xe9quipement pour le v\xe9lo ?"}),(0,r.jsxs)("p",{children:["Lorsque l'on se lance dans le ",r.jsx("strong",{children:"cyclisme"}),", il est essentiel de s'\xe9quiper correctement pour"," ",r.jsx("strong",{children:"garantir sa s\xe9curit\xe9, son confort et ses performances"}),". Ici on vous guide pour que vous puissiez faire les bons choix d'achats pour les \xe9quipements les plus utilis\xe9s \xe0 v\xe9lo: le casque, les lunettes, les v\xeatements et les chaussures, gr\xe2ce \xe0 nos"," ",r.jsx("strong",{children:"conseils"})," et nos ",r.jsx("strong",{children:"avis"})," professionnels."]}),r.jsx(a.default,{src:m,alt:"I love bike"}),r.jsx("h3",{children:"Casque de v\xe9lo : Votre Bouclier de Protection"}),(0,r.jsxs)("p",{children:["Le ",r.jsx("strong",{children:"casque"})," est un \xe9l\xe9ment de s\xe9curit\xe9 incontournable pour tout cycliste. Il offre une protection cruciale contre les blessures \xe0 la t\xeate en cas de chute. Les chiffres parlent d'eux-m\xeames : selon le National Highway Traffic Safety Administration (NHTSA) aux \xc9tats-Unis, le simple fait de porter un casque de v\xe9lo peut r\xe9duire le risque de blessures \xe0 la t\xeate de 85 % et le risque de blessures au cerveau de 88 %. Ces statistiques soulignent l'importance vitale de cet \xe9quipement."]}),(0,r.jsxs)("p",{children:["Outre la s\xe9curit\xe9, les prix des casques varient en fonction de la qualit\xe9 et des caract\xe9ristiques. Pour des casques d'entr\xe9e de gamme, vous pouvez vous attendre \xe0 d\xe9penser environ 30 \xe0 50 euros. Ces casques offrent une ",r.jsx("strong",{children:"protection de base"})," et sont parfaits pour les cyclistes occasionnels."]}),(0,r.jsxs)("p",{children:["Si vous recherchez un \xe9quilibre entre qualit\xe9 et prix, des casques de milieu de gamme se situent g\xe9n\xe9ralement entre 50 et 150 euros. Ils offrent"," ",r.jsx("strong",{children:"un meilleur ajustement, une meilleure ventilation et des caract\xe9ristiques de s\xe9curit\xe9 am\xe9lior\xe9es"}),", tout en demeurant abordables."]}),(0,r.jsxs)("p",{children:["Pour les ",r.jsx("strong",{children:"cyclistes"})," plus exigeants et pr\xeats \xe0 investir dans la qualit\xe9, les casques haut de gamme peuvent co\xfbter de 150 euros et plus. Ils offrent une protection de pointe, un ajustement personnalis\xe9, une a\xe9rodynamique optimis\xe9e et un design l\xe9ger. Il est int\xe9ressant de noter que certains mod\xe8les de casques haut de gamme permettent m\xeame l'ajustement de la visi\xe8re en fonction de la lumi\xe8re ambiante pour une vision optimale, ce qui ajoute une couche de sophistication \xe0 la s\xe9curit\xe9."]}),r.jsx("h3",{children:"Lunettes de cyclisme : plus qu'un accessoire"}),(0,r.jsxs)("p",{children:["Les ",r.jsx("strong",{children:"lunettes de cyclisme"})," jouent un r\xf4le crucial dans votre confort et votre protection. Des \xe9tudes montrent que le port de lunettes de soleil de qualit\xe9 pendant le cyclisme peut r\xe9duire la fatigue oculaire due \xe0 l'exposition aux rayons UV, am\xe9liorer la vision et pr\xe9venir les probl\xe8mes de vision \xe0 long terme."]}),(0,r.jsxs)("p",{children:["Les tarifs vont varier en fonction de la qualit\xe9 des verres et des fonctionnalit\xe9s. Pour des lunettes d'entr\xe9e de gamme, vous pouvez vous attendre \xe0 d\xe9penser environ 20 \xe0 50 euros. Ces lunettes offrent",r.jsx("strong",{children:" une protection de base contre les UV et le vent"}),", mais peuvent manquer de fonctionnalit\xe9s avanc\xe9es."]}),r.jsx("p",{children:"Pour un meilleur rapport qualit\xe9-prix, des lunettes de milieu de gamme se situent g\xe9n\xe9ralement entre 50 et 150 euros. Elles offrent une meilleure qualit\xe9 de verres, des options d'ajustement et de ventilation, ainsi que des verres interchangeables pour diff\xe9rentes conditions."}),(0,r.jsxs)("p",{children:["Pour les cyclistes s\xe9rieux pr\xeats \xe0 investir dans des lunettes haut de gamme, les prix peuvent d\xe9passer 150 euros. Ces lunettes offrent des"," ",r.jsx("strong",{children:"verres de haute qualit\xe9, une protection maximale contre les UV, une excellente ventilation, une a\xe9rodynamique optimis\xe9e et des options de personnalisation."})]}),r.jsx("p",{children:"De plus, certaines marques proposent d\xe9sormais des lunettes ajustables \xe0 la vue pour les cyclistes myopes ou hyperm\xe9tropes, offrant une vision claire sans devoir porter des lentilles de contact, et cela gr\xe2ce \xe0 une simple ordonnance de votre professionnel de sant\xe9."}),r.jsx("h3",{children:"V\xeatements de cyclisme : confort et performance"}),(0,r.jsxs)("p",{children:["Le choix de vos ",r.jsx("strong",{children:"v\xeatements de cyclisme"})," a un impact significatif sur votre exp\xe9rience sur la route. Avoir les"," ",r.jsx("strong",{children:"v\xeatements appropri\xe9s"})," peuvent aider \xe0 r\xe9guler la temp\xe9rature corporelle, \xe9vacuer la transpiration ou prot\xe9ger contre le froid, le vent et la pluie, ce qui contribue au confort et \xe0 la performance du cycliste."]}),(0,r.jsxs)("p",{children:["Selon la gamme des v\xeatements, vous pouvez vous attendre \xe0 payer d'environ 30 \xe0 70 euros pour les \xe9quipements premiers prix - Ces ensembles offrent des mat\xe9riaux de base et un ajustement d\xe9cent pour les cyclistes occasionnels - jusqu'\xe0 plus de 150 euros pour les cyclistes passionn\xe9s en qu\xeate de qualit\xe9 sup\xe9rieure. Fabriqu\xe9s \xe0 partir de mat\xe9riaux r\xe9spirants de haute qualit\xe9, ces ensembles offrent une coupe ",r.jsx("strong",{children:"a\xe9rodynamique"}),", une gestion avanc\xe9e de l'humidit\xe9 et des caract\xe9ristiques de haute performance."]}),r.jsx("h3",{children:"Chaussures de cyclisme : puissance et confort"}),(0,r.jsxs)("p",{children:["Les ",r.jsx("strong",{children:"chaussures de cyclisme"})," sont essentielles pour transf\xe9rer efficacement la puissance de vos jambes aux p\xe9dales. Les prix varient en fonction de la qualit\xe9 des chaussures et de leurs caract\xe9ristiques. Pour des chaussures d'entr\xe9e de gamme, vous pouvez vous attendre \xe0 d\xe9penser environ 50 \xe0 100 euros. Ces chaussures offrent un bon ajustement et des semelles suffisamment rigides pour les cyclistes occasionnels."]}),(0,r.jsxs)("p",{children:["Pour un meilleur"," ",r.jsx("strong",{children:"transfert de puissance et un confort am\xe9lior\xe9"}),", des chaussures de milieu de gamme se situent g\xe9n\xe9ralement entre 100 et 200 euros. Elles offrent des semelles plus rigides et un meilleur ajustement."]}),(0,r.jsxs)("p",{children:["Pour les cyclistes s\xe9rieux recherchant des"," ",r.jsx("strong",{children:"performances optimales"}),", les chaussures haut de gamme peuvent co\xfbter 200 euros et plus. Ces chaussures offrent des semelles ultrarigides, une a\xe9rodynamique avanc\xe9e, un ajustement sur mesure et des fonctionnalit\xe9s de pointe, y compris le syst\xe8me"," ",r.jsx("strong",{children:"Boa"})," pour un ajustement pr\xe9cis et rapide, en assurant un blocage sup\xe9rieur du talon et en am\xe9liorant la connexion \xe0 la semelle interm\xe9diaire. Autrefois r\xe9serv\xe9 aux professionnels, ce syst\xe8me est de plus en plus d\xe9mocratis\xe9 au fil du temps, au point m\xeame que l'on puisse trouver assez facilement des chaussures dot\xe9 du syst\xe8me Boa, et ce pour un prix de plus en plus abordable."]}),r.jsx("p",{className:"hometext__conclu",children:"En conclusion, choisir le bon \xe9quipement pour le v\xe9lo est essentiel pour votre s\xe9curit\xe9, votre confort et vos performances. Assurez-vous de prendre en compte les gammes de prix sp\xe9cifiques \xe0 chaque cat\xe9gorie d'\xe9quipement, et adaptez vos choix \xe0 votre budget, \xe0 votre style de cyclisme et \xe0 vos besoins. Que vous soyez un d\xe9butant ou un cycliste exp\xe9riment\xe9, investir dans un \xe9quipement de qualit\xe9 vous permettra de profiter au maximum de votre passion pour le v\xe9lo."})]}),(0,r.jsxs)("div",{className:"hometext__container brandtext",children:[r.jsx("h2",{children:"Quelle marque choisir pour vos \xe9quipements ?"}),r.jsx("p",{children:"Lorsqu'il s'agit de choisir l'\xe9quipement cycliste qui vous accompagnera sur la route, la qualit\xe9 et la r\xe9putation de la marque sont des facteurs cruciaux \xe0 prendre en compte. Parmi les marques les plus renomm\xe9es dans l'industrie du cyclisme, voici un aper\xe7u de celles qui se d\xe9marquent dans diff\xe9rentes cat\xe9gories d'\xe9quipement."}),r.jsx(a.default,{src:h,alt:"Toutes les marques"}),r.jsx("h3",{children:"Abus"}),(0,r.jsxs)("p",{children:["Fond\xe9e en Allemagne,"," ",r.jsx("strong",{children:r.jsx("a",{href:"/casques/casques-abus",children:"Abus"})})," ","est une marque renomm\xe9e dans l'industrie des casques de cyclisme. Leur r\xe9putation repose sur la qualit\xe9 et la durabilit\xe9 de leurs produits, offrant une protection exceptionnelle aux cyclistes de tous niveaux."]}),r.jsx("h3",{children:"Bell"}),(0,r.jsxs)("p",{children:["Avec une histoire qui s'\xe9tend sur plusieurs d\xe9cennies,"," ",r.jsx("strong",{children:r.jsx("a",{href:"/casques/casques-bell",children:"Bell"})})," ","est une marque am\xe9ricaine qui se distingue par sa capacit\xe9 \xe0 cr\xe9er des casques innovants et styl\xe9s. Que vous soyez un cycliste d\xe9butant ou exp\xe9riment\xe9, Bell propose des options pour tous les go\xfbts."]}),r.jsx("h3",{children:"Giro"}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:r.jsx("a",{href:"/casques/casques-giro",children:"Giro"})})," ","est une autre marque am\xe9ricaine qui m\xe9rite une mention sp\xe9ciale. Leur engagement envers la s\xe9curit\xe9, le confort et le design se refl\xe8te dans chacun de leurs casques. Vous pouvez compter sur Giro pour vous prot\xe9ger avec style."]}),r.jsx("h3",{children:"Kask"}),(0,r.jsxs)("p",{children:["Les casques"," ",r.jsx("strong",{children:r.jsx("a",{href:"/casques/casques-kask",children:"Kask"})}),", originaires d'Italie, sont r\xe9put\xe9s pour leur \xe9l\xe9gance et leur ergonomie. Leur design est soign\xe9, et ils offrent une protection de haute qualit\xe9 pour les cyclistes exigeants."]}),r.jsx("h3",{children:"Oakley"}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:r.jsx("a",{href:"/lunettes/lunettes-oakley",children:"Oakley"})})," ","est synonyme d'innovation en mati\xe8re de lunettes de cyclisme. Leurs produits offrent non seulement une excellente protection contre les rayons UV, mais aussi un style distinctif qui les distingue de la concurrence."]}),r.jsx("h3",{children:"Rudy Project"}),(0,r.jsxs)("p",{children:["Une marque italienne renomm\xe9e,"," ",r.jsx("strong",{children:r.jsx("a",{href:"/casques/casques-rudy-project",children:"Rudy Project"})})," ","excelle dans la fabrication de lunettes de haute performance. Leur design \xe9l\xe9gant est associ\xe9 \xe0 des caract\xe9ristiques techniques de pointe."]}),r.jsx("h3",{children:"Smith"}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:r.jsx("a",{href:"/lunettes/lunettes-smith",children:"Smith"})})," ","se d\xe9marque par ses lunettes \xe9l\xe9gantes et ses verres de qualit\xe9 optique sup\xe9rieure. Que vous soyez sur la route ou sur les sentiers, ces lunettes offrent une vision claire et prot\xe8gent vos yeux des \xe9l\xe9ments."]}),r.jsx("h3",{children:"Castelli"}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:r.jsx("a",{href:"/vetements/vetements-castelli",children:"Castelli"})}),", bas\xe9e en Italie, est c\xe9l\xe8bre pour ses v\xeatements de cyclisme haut de gamme. Leur engagement envers le style et la performance en fait un choix privil\xe9gi\xe9 pour de nombreux cyclistes."]}),r.jsx("h3",{children:"Rapha"}),(0,r.jsxs)("p",{children:["La marque britannique"," ",r.jsx("strong",{children:r.jsx("a",{href:"/vetements/vetements-rapha",children:"Rapha"})})," ","se d\xe9marque par son design \xe9l\xe9gant et ses mat\xe9riaux de haute qualit\xe9. Leurs v\xeatements sont \xe0 la fois fonctionnels et esth\xe9tiques, ce qui les rend populaires aupr\xe8s des cyclistes exigeants."]}),r.jsx("h3",{children:"Assos"}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:r.jsx("a",{href:"/vetements/vetements-assos",children:"Assos"})}),", une marque suisse, est reconnue pour ses v\xeatements de cyclisme techniques et confortables. Leur expertise dans les mat\xe9riaux et la conception les rend adapt\xe9s aux longues sorties \xe0 v\xe9lo."]}),r.jsx("h3",{children:"Sidi"}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:r.jsx("a",{href:"/chaussures/chaussures-sidi",children:"Sidi"})}),", une marque italienne bien \xe9tablie, propose des chaussures de cyclisme de haute qualit\xe9. Souvent pr\xe9f\xe9r\xe9es par les cyclistes professionnels, les chaussures Sidi offrent un ajustement pr\xe9cis et une transmission efficace de la puissance."]}),r.jsx("h3",{children:"Shimano"}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:r.jsx("a",{href:"/chaussures/chaussures-shimano",children:"Shimano"})}),", le g\xe9ant de l'industrie japonaise, fabrique aussi des chaussures de cyclisme durables pour une vari\xe9t\xe9 de styles. Leur attention aux d\xe9tails se refl\xe8te dans la qualit\xe9 de leurs produits."]}),r.jsx("h3",{children:"Fizik"}),(0,r.jsxs)("p",{children:["Les chaussures"," ",r.jsx("strong",{children:r.jsx("a",{href:"/chaussures/chaussures-fizik",children:"Fizik"})}),", d'origine italienne, sont appr\xe9ci\xe9es pour leur \xe9l\xe9gance et leur ergonomie. Leur design soign\xe9 allie style et performance pour r\xe9pondre aux besoins des cyclistes exigeants."]}),r.jsx("p",{className:"hometext__conclu",children:"Il est important de noter que le choix de la marque d\xe9pendra de vos pr\xe9f\xe9rences personnelles, de votre style de cyclisme et de votre budget. Les marques \xe9num\xe9r\xe9es ci-dessus sont des leaders dans l'industrie, offrant une vari\xe9t\xe9 d'options pour r\xe9pondre \xe0 vos besoins sp\xe9cifiques. Prenez le temps de comparer les caract\xe9ristiques, les prix et les avis pour trouver la marque qui vous convient le mieux. Que vous recherchiez un casque de s\xe9curit\xe9, des lunettes styl\xe9es, des v\xeatements performants ou des chaussures confortables, l'\xe9quipement cycliste id\xe9al est \xe0 port\xe9e de main gr\xe2ce \xe0 ces marques de renom. Profitez de vos aventures sur deux roues avec confiance et style gr\xe2ce \xe0 un \xe9quipement de qualit\xe9."})]})]})};var v=t(24501);t(42765);let f=function(){return(0,r.jsxs)("section",{className:"intro",children:[(0,r.jsxs)("div",{className:"intro__safe",children:[r.jsx("h2",{className:"intro__title",children:"S\xe9curit\xe9"}),r.jsx("div",{className:"intro__hexagon",children:r.jsx(v.JO,{icon:"ant-design:safety-certificate-filled"})}),r.jsx("div",{className:"intro__txt",children:r.jsx("p",{children:"D\xe9couvrez les derni\xe8res innovations en mati\xe8re d'\xe9quipements de protection. Prot\xe9gez-vous \xe0 chaque sortie \xe0 v\xe9lo."})})]}),(0,r.jsxs)("div",{className:"intro__comfort",children:[r.jsx("h2",{className:"intro__title",children:"Confort"}),r.jsx("div",{className:"intro__hexagon",children:r.jsx(v.JO,{icon:"icon-park-twotone:t-shirt"})}),r.jsx("div",{className:"intro__txt",children:r.jsx("p",{children:"Trouvez des v\xeatements et des chaussures qui rendront vos sorties \xe0 v\xe9lo plus agr\xe9ables. Maximisez votre confort sur la selle."})})]}),(0,r.jsxs)("div",{className:"intro__style",children:[r.jsx("h2",{className:"intro__title",children:"Tendance"}),r.jsx("div",{className:"intro__hexagon",children:r.jsx(v.JO,{icon:"noto-v1:sunglasses"})}),r.jsx("div",{className:"intro__txt",children:r.jsx("p",{children:"Restez \xe0 la pointe de la mode avec notre s\xe9lection d'\xe9quipements \xe9l\xe9gants et tendance. Exprimez votre style \xe0 travers vos \xe9quipements."})})]})]})},j=function(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:"home",children:[r.jsx(p,{}),r.jsx(f,{}),r.jsx(u,{}),r.jsx(x,{})]})})}},50258:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f});var r=t(95344),n=t(26258),i=t.n(n);t(25348);var a=t(24501);let l={src:"/_next/static/media/logo.9df58a92.png",height:140,width:497,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEWnX22yYWK7Y1vKZk2aXHg0PBTNAAAACXBIWXMAABJ0AAASdAHeZh94AAAAGUlEQVR4nAXBAQEAAAiDMOD2z+xGmiM6YPgA6gAXU9Ex2wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2};var o=t(89410),u=t(56506);let c=function(){return(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsxs)("div",{className:"footer__flex-a",children:[r.jsx(o.default,{src:l,alt:"Logo du site equipement-velo.fr"}),r.jsx("p",{children:"D\xe9couvrez les meilleurs conseils pour choisir vos \xe9quipements de v\xe9lo adapt\xe9s \xe0 votre style et \xe0 vos besoins."}),(0,r.jsxs)("div",{className:"footer__flex-a-icon",children:[r.jsx("a",{href:"https://www.instagram.com/equipementvelo5/","aria-label":"Instagram",target:"_blank",rel:"noreferrer",children:r.jsx(a.JO,{icon:"mdi:instagram"})}),r.jsx("a",{href:"https://twitter.com/EquipementVelo","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:r.jsx(a.JO,{icon:"mdi:twitter"})}),r.jsx("a",{href:"https://www.facebook.com/profile.php?id=61555770154596","aria-label":"Facebook",target:"_blank",rel:"noreferrer",children:r.jsx(a.JO,{icon:"mdi:facebook"})})]})]}),(0,r.jsxs)("div",{className:"footer__flex-b",children:[r.jsx("div",{children:r.jsx("p",{children:"\xa9 Copyright 2024 – Equipement-velo.fr – Tous droits r\xe9serv\xe9s"})}),(0,r.jsxs)("ul",{className:"footer__flex-b-anc",children:[r.jsx("li",{className:"first-anchor",children:r.jsx(u.default,{href:"/mentions-legales",children:"Mentions l\xe9gales"})}),r.jsx("li",{className:"second-anchor",children:r.jsx(u.default,{href:"/contact",children:"Contact"})})]})]})]})};var d=t(3729),p=t(7470),m=t.n(p);function h({title:e,options:s}){let[t,n]=(0,d.useState)(!1),[i,a]=(0,d.useState)(!1),l=()=>{n(!t)};return(0,d.useEffect)(()=>{function e(){window.innerWidth>768?a(!0):a(!1)}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.jsxs)("div",{className:`dropdown ${i?"desktop":"mobile"}`,onMouseEnter:i?l:null,onMouseLeave:i?()=>{n(!1)}:null,onClick:i?null:l,children:[r.jsx("li",{className:"dropdown__title",children:e}),t&&r.jsx("div",{className:"dropdown__title-options",children:s.map(s=>r.jsx("a",{href:`/${e.toLowerCase().replace(/ê/g,"e")}/${s.replace(/\s+/g,"-").replace(/[êé]/g,"e").replace(/\./g,"-").toLowerCase()}`,children:s},s))})]})}t(98286),h.propTypes={title:m().string.isRequired,options:m().array.isRequired},t(82181);let x=function(){let[e,s]=(0,d.useState)(!1);return(0,r.jsxs)("header",{className:"header",children:[r.jsx("h1",{className:"header__logo",children:r.jsx("a",{href:"/","aria-label":"\xc9quipement-V\xe9lo",children:r.jsx(o.default,{src:l,alt:"Logo du site equipement-velo.fr"})})}),(0,r.jsxs)("nav",{className:"header__nav",children:[r.jsx("div",{className:"menu-toggle",onClick:()=>{s(!e)},children:e?r.jsx(a.JO,{icon:"mdi:close"}):r.jsx(a.JO,{icon:"mdi:menu"})}),(0,r.jsxs)("ul",{className:`header__list ${e?"active":"inactive"}`,children:[r.jsx(h,{title:"Casques",options:["Casques Abus","Casques Bell","Casques Giro","Casques Kask","Casques Lazer","Casques MET","Casques POC","Casques Rudy Project","Casques Scott","Casques Smith","Casques Uvex"]}),r.jsx(h,{title:"Lunettes",options:["Lunettes Alpina","Lunettes Boll\xe9","Lunettes Julbo","Lunettes Oakley","Lunettes Rudy Project","Lunettes Smith","Lunettes Uvex"]}),r.jsx(h,{title:"V\xeatements",options:["V\xeatements Al\xe9","V\xeatements Assos","V\xeatements Castelli","V\xeatements Endura","V\xeatements Gore Wear","V\xeatements Le Col","V\xeatements Q36.5","V\xeatements Rapha","V\xeatements Santini","V\xeatements Sportful"]}),r.jsx(h,{title:"Chaussures",options:["Chaussures Fizik","Chaussures Gaerne","Chaussures Mavic","Chaussures Northwave","Chaussures Shimano","Chaussures Sidi"]})]})]})]})};var v=t(62604);function f({children:e}){return(0,r.jsxs)("html",{lang:"fr",children:[(0,r.jsxs)("body",{className:i().className,children:[r.jsx(x,{}),e,r.jsx(c,{})]}),r.jsx(v.Wi,{gaId:"G-JNFF13MLTT"})]})}},615:(e,s,t)=>{"use strict";t.d(s,{F:()=>r});let r="http://localhost:80"},93384:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>n,default:()=>a});let r=(0,t(86843).createProxy)(String.raw`D:\equip-velo-for-nextjs\app\layout.js`),{__esModule:n,$$typeof:i}=r,a=r.default},79994:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>u,metadata:()=>o});var r=t(25036);let n=(0,t(86843).createProxy)(String.raw`D:\equip-velo-for-nextjs\app\home.js`),{__esModule:i,$$typeof:a}=n,l=n.default,o={metadataBase:new URL("https://equipement-velo.fr"),title:"Equipement V\xe9lo - Conseils Casques, V\xeatements, Lunettes et Chaussures",description:"D\xe9couvrez nos meilleurs conseils pour choisir casques, lunettes, v\xeatements et chaussures de v\xe9lo adapt\xe9s \xe0 votre style et \xe0 vos besoins.",openGraph:{title:"Equipement V\xe9lo - Conseils Casques, V\xeatements, Lunettes et Chaussures",description:"D\xe9couvrez nos meilleurs conseils pour choisir casques, lunettes, v\xeatements et chaussures de v\xe9lo adapt\xe9s \xe0 votre style et \xe0 vos besoins.",url:"https://equipement-velo.fr",siteName:"\xc9quipement V\xe9lo",image:"https://i.ibb.co/DzQrYYZ/logo-fb-size.png",locale:"fr_FR",type:"website"}};function u(){return r.jsx("div",{children:r.jsx(l,{})})}},57481:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var r=t(70337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},98286:()=>{},25348:()=>{},82181:()=>{},43959:()=>{},56722:()=>{},35190:()=>{},80819:()=>{},42765:()=>{}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[638,168,337],()=>t(16305));module.exports=r})();