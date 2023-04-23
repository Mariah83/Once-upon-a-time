/* MARIAH PALMER
================================================================== */

console.log('Once upon a time...')


// PROJECT DETAILS
;(function projectDetails() {
  if (document.querySelector('.building section')) {
    let sections = document.querySelectorAll('.building section')
    for (let i = 0; i < sections.length; i++) {
      sections[i].addEventListener('click', function(e) {
        e.stopPropagation()
        if (document.querySelector('.project-active')) {
          document.querySelector('.project-active').classList.remove('project-active')
        }
        this.classList.add('project-active')
      })
    }

    let building = document.querySelector('.building')
    building.addEventListener('click', function() {
      if (document.querySelector('.project-active')) {
        document.querySelector('.project-active').classList.remove('project-active')
      }
    })
    detailImages()
  }
})();

function detailImages() {
  if (document.querySelector('.detail-images')) {
    let detailContainers = document.querySelectorAll('.detail-images')
    for (let i = 0; i < detailContainers.length; i++) {
      let detail = detailContainers[i]
      if (!detail.querySelector('.active-image')) {
        detail.querySelector('img').classList.add('active-image')
      }
      let detailParent = detail.parentElement
      detailParent.addEventListener('click', function() {
        let imgs = detail.querySelectorAll('img')
          
          if (detail.querySelector('.active-image')) {
            let count = 0
            for (let i = 0; i < imgs.length; i++) {
              imgs[i].classList.contains('active-image') ? count = i + 1 : count = count
            }
            count < imgs.length ? count = count : count = 0
            detail.querySelector('.active-image').classList.remove('active-image')
            imgs[count].classList.add('active-image')

        }
      })
      }
    }
  }
