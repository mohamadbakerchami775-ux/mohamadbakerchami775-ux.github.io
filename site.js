document.addEventListener("DOMContentLoaded",()=>{
  const reveal=document.querySelectorAll(".section-index,.section-title,.about-statement,.overview-grid,.timeline article,.wide-visual,.artifact-note,.document-grid>article,.presence-grid>*,.visit-grid>article,.source-note,.hiring .evidence-table,.project-image,.project-points span,.reflection-report");
  reveal.forEach((el,i)=>{el.classList.add("reveal-item");el.style.setProperty("--reveal-delay",`${Math.min(i%4,3)*70}ms`)});
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.1,rootMargin:"0px 0px -8% 0px"});
  reveal.forEach(el=>observer.observe(el));
  const sections=[...document.querySelectorAll(".section[id]")];
  const links=[...document.querySelectorAll(".section-rail a")];
  const onScroll=()=>{
    const max=document.documentElement.scrollHeight-innerHeight;
    document.documentElement.style.setProperty("--scroll-progress",String(max>0?scrollY/max:0));
    document.documentElement.style.setProperty("--hero-shift",`${Math.min(scrollY*.11,85)}px`);
    let current=sections[0]?.id;
    sections.forEach(section=>{if(section.getBoundingClientRect().top<innerHeight*.48)current=section.id});
    links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")===`#${current}`));
  };
  onScroll();addEventListener("scroll",onScroll,{passive:true});
});
