const searchForm = document.querySelector('#search-form')
searchForm.addEventListener('submit', function onFormSubmitted(event) {
  const searchInput = document.querySelector('.search-input')
  const keyword = searchInput.value.trim()
  const all = document.querySelector("option[value='all']")
  if (all.selected) {
    keyword = 'all'
  }
  if (!keyword.length) {
    event.stopPropagation()
    event.preventDefault()
    return alert('請輸入餐廳名稱!')
  }
})