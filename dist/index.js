var e;exports.EFakeVideoType=void 0,(e=exports.EFakeVideoType||(exports.EFakeVideoType={}))[e.NATIVE=0]="NATIVE",e[e.YOUTUBE=1]="YOUTUBE",e[e.VIMEO=2]="VIMEO";class t{static randomIntFromInterval(e,t){return Math.floor(Math.random()*(t-e+1)+e)}static randomValueFromArray(e){return e[Math.floor(Math.random()*e.length)]}static shuffleArray(e){let t,i,a=e.length;for(;0!==a;)i=Math.floor(Math.random()*a),a-=1,t=e[a],e[a]=e[i],e[i]=t;return e}static responsiveImageData(e=4/3,i=[640,1024,1440,1920]){return i.map(i=>{const a={width:i,height:Math.round(i/e)};return{url:[this.imageApi,"/id/",t.randomIntFromInterval(1,200),"/",a.width,"/",a.height].join(""),width:a.width,height:a.height}})}static videoUrl(e,i=t.randomValueFromArray(t.youtubeIds),a=t.randomValueFromArray(t.vimeoIds)){return e===exports.EFakeVideoType.YOUTUBE?`https://youtu.be/${i}`:e===exports.EFakeVideoType.VIMEO?`https://vimeo.com/${a}`:e===exports.EFakeVideoType.NATIVE?t.randomValueFromArray(t.nativeVideosUrl):void 0}static videoId(e){return e===exports.EFakeVideoType.YOUTUBE?t.randomValueFromArray(t.youtubeIds):e===exports.EFakeVideoType.VIMEO?t.randomValueFromArray(t.vimeoIds):void 0}static title(e=1){return t.randomValueFromArray(t.lorem).split(" ").map((t,i)=>i<=e-1?t:null).filter(e=>e).join(" ")}static text(e=1){return t.shuffleArray(t.lorem).map((t,i)=>i<=e-1?t:null).filter(e=>e).join(" ")}static html(e=1){return""}}t.imageApi="https://picsum.photos",t.youtubeIds=["gxlA6JB3Z6w","ferZnZ0_rSM","qYPQ0EUmbTs","mVJjmyFfuts","SiDBiIsFiqU","vfzu33BfRHE","QKzobTCIRDw","yXrlhebkpIQ","YJ-efUsAhc8","weL8HTY1NJU","peYcNm3JTe8","XyW5Zz0w1zg","vPBirt1YhuM","GP3jS_gFs-g","oGTVoX7AaRc"],t.vimeoIds=["142320599","17363035","36168588","208432684","88665448","2497587","32773959","29405767","217388307","25915873","153347836","63741693","145049057","16247888"],t.nativeVideosUrl=["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"],t.lorem=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Donec egestas lacus et porta congue.","Proin semper mauris et hendrerit euismod.","Aenean bibendum nunc a nunc aliquam vulputate vitae in nisi.","Nam faucibus ipsum condimentum, lobortis ante quis, tempus nunc.","Vivamus vulputate nisi nec metus pulvinar scelerisque non in ex.","Duis quis eros vel metus vehicula tristique eu id ipsum.","In ac nisi pharetra sem efficitur placerat.","Nam finibus turpis at quam pulvinar, et elementum ante pharetra.","Sed vel massa lacinia dolor lacinia molestie.","Curabitur fermentum ante id mi tristique commodo.","Aliquam at mi eu orci ultrices dignissim ut vel sem.","Pellentesque iaculis odio vel leo venenatis, ut vehicula mauris varius.","Etiam ac risus eget odio hendrerit iaculis non ac libero.","Curabitur in augue in urna ultrices porta."],exports.Fake=t;
//# sourceMappingURL=index.js.map
