export function initTabs() {
   document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-tab-caption]');
      if (!target) return
      const captionId = target.dataset.tabCaption;
      const tabParent = target.closest('._tab');
      const contentItem = tabParent.querySelector(`[data-tab-content='${captionId}']`);
      if (!contentItem) return;
      const captions = tabParent.querySelectorAll('[data-tab-caption]');
      captions.forEach(caption => caption.classList.remove('_active-tab-caption'));

      const contents = tabParent.querySelectorAll('[data-tab-content]');
      contents.forEach(content => content.classList.remove('_active-tab-content'));

      target.classList.add('_active-tab-caption');
      contentItem.classList.add('_active-tab-content');

      contentItem.querySelectorAll('._animated').forEach((item, i) => {
         if (!item.classList.contains('_tab-content-anim')) {
            item.style.setProperty('--i', `${i}`);
            item.classList.add('_tab-content-anim');
            setTimeout(() => {
               item.classList.remove('_tab-content-anim');
            }, 1200);
         }
      });
   });
}