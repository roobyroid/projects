export function dynamicTitle(pageName) {
   const sections = document.querySelectorAll('[data-section]');
   const options = {
      threshold: 0.3,
      rootMargin: '0px'
   };

   function callback(entries, observer) {
      entries.forEach(function(entry) {
         if (entry.isIntersecting) {
            const currentSectionTitle = entry.target.dataset.section;
            document.title = `${pageName} - ${currentSectionTitle}`;
            observer.unobserve(entry.target);
         }
      });
   }

   const sectionObserver = new IntersectionObserver(callback, options);

   sections.forEach(function(section) {
      sectionObserver.observe(section);
   });
}
