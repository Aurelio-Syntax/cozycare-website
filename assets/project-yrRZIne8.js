import{a as g}from"./data-DmCDKLx9.js";const T=new URLSearchParams(window.location.search),B=T.get("id"),r=g.find(t=>t.id===B)||g[0],f=sessionStorage.getItem("transitionColor");f&&document.documentElement.style.setProperty("--hero-color",f);document.title=r.title;document.documentElement.style.setProperty("--hero-color",r.color);const s=document.querySelector(".hero-glow");s&&(s.style.background=`
        radial-gradient(
            circle,
            ${r.color}66,
            ${r.color}22,
            transparent 72%
        )
    `);document.getElementById("title").textContent=r.title;const c=document.getElementById("backgroundTitle");c&&(c.textContent=r.title.toUpperCase());document.getElementById("subtitle").textContent=r.subtitle;document.getElementById("description").textContent=r.description;document.getElementById("heroImage").src=r.heroImage;const h=document.getElementById("storyImage");h&&(h.src=r.heroImage);const w=document.getElementById("showcaseImage");w&&(w.src=r.heroImage);const $=document.querySelector(".primary"),x=document.querySelector(".secondary");$&&($.href=r.links.demo);x&&(x.href=r.links.github);const b=document.querySelector(".gallery");b.innerHTML="";r.gallery.forEach((t,e)=>{const o=document.createElement("img");o.style.opacity="0",o.style.transform="translateY(80px)",o.src=t,o.loading="lazy",o.draggable=!1,o.classList.add("gallery-item"),b.appendChild(o),setTimeout(()=>{o.style.transition="all .8s cubic-bezier(.22,.61,.36,1)",o.style.opacity="1",o.style.transform="translateY(0px)"},120*e),o.addEventListener("mousemove",n=>{const a=o.getBoundingClientRect(),d=n.clientX-a.left,m=n.clientY-a.top,C=(d/a.width-.5)*10,M=(.5-m/a.height)*10;o.style.transform=`
            perspective(1000px)
            rotateX(${M}deg)
            rotateY(${C}deg)
            translateY(-10px)
            scale(1.03)
        `}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0px)"})});const I=document.querySelector(".features");I.innerHTML="";r.features.forEach((t,e)=>{const o=document.createElement("div");o.className="feature",o.innerHTML=`
    
            <div class="feature-number">
    
                ${String(e+1).padStart(2,"0")}
    
            </div>
    
            <h3>
    
                ${t}
    
            </h3>
    
            <p>
    
                Carefully designed to create
                a fast, intuitive and enjoyable
                user experience.
    
            </p>
    
        `,I.appendChild(o)});const q=document.querySelector(".stack");q.innerHTML="";r.techStack.forEach(t=>{const e=document.createElement("div");e.className="stack-card",e.innerHTML=`
    
            <div class="stack-dot"></div>
    
            <span>
    
                ${t}
    
            </span>
    
        `,q.appendChild(e)});document.querySelector(".hero");const u=document.querySelector(".hero-left"),v=document.querySelector(".hero-right"),l=document.querySelector(".phone"),E=document.querySelector(".story-card"),S=document.querySelector(".story-glow");window.addEventListener("scroll",()=>{const t=window.scrollY,e=Math.min(t/700,1);l&&(l.style.transform=`
            translateY(${-e*90}px)
            rotate(${-3+e*4}deg)
            scale(${1+e*.06})
        `),u&&(u.style.transform=`translateY(${e*60}px)`,u.style.opacity=1-e*.6),v&&(v.style.transform=`translateY(${-e*40}px)`),s&&(s.style.transform=`scale(${1+e*.18})`),c&&(c.style.transform=`translate(-50%,calc(-50% + ${t*.18}px))`,c.style.opacity=Math.max(.015,.04-e*.02))});window.addEventListener("mousemove",t=>{const e=t.clientX/window.innerWidth-.5,o=t.clientY/window.innerHeight-.5;l&&(l.style.transition="transform .18s ease-out",l.style.transform=`
        
                translateY(-8px)
        
                perspective(1200px)
        
                rotateY(${e*16}deg)
        
                rotateX(${-o*14}deg)
        
                rotateZ(${e*2}deg)
        
                scale(1.015)
        
            `),s&&(s.style.transform=`

        translate(${e*70}px,${o*70}px)

        scale(${1.08+Math.abs(e)*.06})

    `),E&&(E.style.transform=`
            rotateY(${e*8}deg)
            rotateX(${-o*8}deg)
            translateY(-8px)
        `),S&&(S.style.transform=`
            translate(${e*25}px,${o*25}px)
            scale(1.08)
        `)});const k=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.15});document.querySelectorAll(".section").forEach(t=>{k.observe(t)});const L=document.querySelector(".cta-glow");window.addEventListener("mousemove",t=>{if(!L)return;const e=t.clientX/window.innerWidth-.5,o=t.clientY/window.innerHeight-.5;L.style.transform=`
        translate(${e*60}px,${o*60}px)
        scale(1.08)
    `});const X=document.querySelectorAll(".gallery-item"),y=document.querySelector(".gallery-wrapper");y&&y.addEventListener("scroll",()=>{X.forEach((t,e)=>{const o=y.scrollLeft,n=(e+1)*.04;t.style.transform=`

                translateY(${Math.sin(o*.01+e)*12}px)

                rotate(${Math.sin(o*.003+e)*2}deg)

                translateX(${o*n}px)

            `})});const Y=document.querySelector(".next-grid");Y&&g.filter(t=>t.id!==r.id).forEach(t=>{const e=document.createElement("a");e.className="next-card",e.href=`project.html?id=${t.id}`,e.innerHTML=`

                <div
                    class="next-color"
                    style="
                        background:${t.color};
                    ">
                </div>

                <img
                    src="${t.heroImage}"
                    alt="${t.title}">

                <h3>

                    ${t.title}

                </h3>

                <p>

                    ${t.subtitle}

                </p>

            `,Y.appendChild(e)});const p=document.querySelector(".showcase-right img");window.addEventListener("scroll",()=>{if(!p)return;const t=p.getBoundingClientRect(),e=Math.max(0,Math.min(1,1-t.top/window.innerHeight));p.style.transform=`

        translateY(${40-e*40}px)

        rotate(${-5+e*5}deg)

        scale(${.95+e*.05})

    `});document.querySelectorAll(".stat").forEach(t=>{t.addEventListener("mousemove",e=>{const o=t.getBoundingClientRect(),n=e.clientX-o.left,d=-(e.clientY-o.top-o.height/2)/18,m=(n-o.width/2)/18;t.style.transform=`

            perspective(900px)

            rotateX(${d}deg)

            rotateY(${m}deg)

            translateY(-8px)

        `}),t.addEventListener("mouseleave",()=>{t.style.transform=""})});const i=document.getElementById("scrollTop");window.addEventListener("scroll",()=>{i&&(window.scrollY>700?i.classList.add("visible"):i.classList.remove("visible"))});i?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
