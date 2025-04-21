const container = document.getElementById('story-list');
const storyScroll = document.getElementById('story-scroll');

const users = [
  { img: '1.jpg', name: 'your story' },
  { img: '2.jpg', name: 'pudding11' },
  { img: '3.jpg', name: 'smartdog' },
  { img: '4.jpg', name: 'apple173' },
  { img: '5.jpg', name: 'ivy77490' },
  { img: '6.jpg', name: 'dreamy_dayz' },
  { img: '7.jpg', name: 'miaa_1023' },
  { img: '8.jpg', name: 'coco.vibes_' },
  { img: '9.jpg', name: 'nora.in.motion' },
  { img: '10.jpg', name: 'kiki_04life' },
  { img: '11.jpg', name: 'yoona.breeze' },
  { img: '12.jpg', name: 'pixel.poetry' },
  { img: '13.jpg', name: 'ivy.nightowl' },
  { img: '14.jpg', name: 'tommy__clouds' },
  { img: '15.jpg', name: 'peachy.moodz' },
  { img: '16.jpg', name: 'zero.gravityx' },
  { img: '17.jpg', name: 'hana_wave' },
  { img: '18.jpg', name: 'leo._sketches' },
  { img: '19.jpg', name: 'chilltune.88' },
  { img: '20.jpg', name: 'happy_6767' }
];

users.forEach((user, index) => {
  const storyHTML = `
    <div class="story-item d-inline-block text-center mx-2 align-top">
      <div class="story-avatar-wrapper rounded-circle m-auto mb-1">
        <img src="${user.img}" class="story-avatar rounded-circle w-100 h-100 object-fit-cover" alt="${user.name}">
        ${index === 0 ? '<div class="story-plus-icon">+</div>' : ''}
      </div>
      <p class="small text-truncate ${index === 0 ? 'text-muted' : ''}" style="font-size: 12px;">${user.name}</p>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', storyHTML);
});

// 滾動橫向滑動處理，防止整頁滑動
storyScroll.addEventListener('wheel', function (e) {
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
  this.scrollLeft += e.deltaY;
  e.preventDefault();
}, { passive: false });





