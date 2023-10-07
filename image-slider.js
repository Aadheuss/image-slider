const isNodeListEmpty = function isNodeListEmpty(node) {
  return node.length === 0;
};

const hideItem = function hideItem(item) {
  item.classList.remove("on-view");
};

const showItem = function showItem(item) {
  item.classList.add("on-view");
};

const findItemToShow = function findItemToShow(items, itemIndex) {
  return Array.from(items).find((item, index) => index === itemIndex);
};

const itemsToHide = function itemsToHide(items, itemIndex) {
  return Array.from(items).filter((item, index) => index !== itemIndex);
};

const hideItems = function hideItems(items) {
  items.forEach((item) => hideItem(item));
};

const activateSliderItems = function activateSliderItems(el, index) {
  const sliderItems = el.querySelectorAll(".slider-item");
  showItem(findItemToShow(sliderItems, index));
};

const createSlideNavBtn = function createSlideNavBtn(mainCls, cls, atr) {
  const btn = document.createElement("button");
  btn.classList.add(mainCls, cls);
  btn.setAttribute("data-key", atr);

  return btn;
};

const createSlideNav = function createSlideNav(navCls, atr) {
  const nav = document.createElement("div");
  nav.classList.add("slider-nav", navCls);
  nav.setAttribute("data-key", atr);
  nav.appendChild(createSlideNavBtn("slider-nav-btn", navCls, atr));

  return nav;
};

const currentViewImgIndex = function currentViewImgIndex(items) {
  return Array.from(items).findIndex((item) =>
    Array.from(item.classList).includes("on-view")
  );
};

const getPreviousImgIndex = function getPreviousImgIndex(items) {
  const currentImgIndex = currentViewImgIndex(items);
  const length = items.length;
  return currentImgIndex === 0 ? length - 1 : currentImgIndex - 1;
};

const getPreviousImg = function getPreviousImg(items) {
  const previousImgIndex = getPreviousImgIndex(items);
  return findItemToShow(items, previousImgIndex);
};

const getNextImgIndex = function getNextImgIndex(items) {
  const currentImgIndex = currentViewImgIndex(items);
  const length = items.length;
  return currentImgIndex === length - 1 ? 0 : currentImgIndex + 1;
};

const getNextImg = function getPreviousImg(items) {
  const nextImgIndex = getNextImgIndex(items);
  return findItemToShow(items, nextImgIndex);
};

const changeActiveLinkBtn = function changeActiveLinkBtn(links, index) {
  const btnToView = findItemToShow(links, index);
  const btnToHide = itemsToHide(links, index);
  hideAllItems(btnToHide);
  showItem(btnToView);
};

const hideAllItems = function hideAllItems(items) {
  items.forEach((item) => hideItem(item));
};

const viewPreviousImg = function viewPreviousImg(el) {
  const links = el.parentElement.querySelectorAll(".slider-link-btn");
  const sliderItems = el.querySelectorAll(".slider-item");
  const imgToView = getPreviousImg(sliderItems);
  const imgToHide = itemsToHide(sliderItems, getPreviousImgIndex(sliderItems));
  changeActiveLinkBtn(links, getPreviousImgIndex(sliderItems));
  hideAllItems(imgToHide);
  showItem(imgToView);
};

const viewNextImg = function viewNextImg(el) {
  const links = el.parentElement.querySelectorAll(".slider-link-btn");
  const sliderItems = el.querySelectorAll(".slider-item");
  const imgToView = getNextImg(sliderItems);
  const imgToHide = itemsToHide(sliderItems, getNextImgIndex(sliderItems));
  changeActiveLinkBtn(links, getNextImgIndex(sliderItems));
  hideAllItems(imgToHide);
  showItem(imgToView);
};
// Create slider previous and next buttons

const addSliderNavigation = function addSliderNavigation(el) {
  const firstSliderItem = el.querySelector(".slider-item");
  const previousBtn = createSlideNav("left", "previous");
  previousBtn.addEventListener("click", viewPreviousImg.bind(this, el));
  const nextBtn = createSlideNav("right", "next");
  nextBtn.addEventListener("click", viewNextImg.bind(this, el));
  el.insertBefore(previousBtn, firstSliderItem);
  el.insertBefore(nextBtn, firstSliderItem);
};

const getAllSliderItems = function getSliderItems(el) {
  return el.querySelectorAll(".slider-item");
};

const createAllSliderLinksBtn = function createSliderLinksBtn(length) {
  const array = [];

  for (let i = 0; i < length; i++) {
    array.push(createSlideNavBtn("slider-link-btn", `link-${i}`, `${i}`));
  }

  return array;
};

const createSliderLinks = function createSliderLinks(el) {
  const sliderLinkContainer = document.createElement("div");
  sliderLinkContainer.classList.add("slider-link-container");
  createAllSliderLinksBtn(getAllSliderItems(el).length).forEach((item) =>
    sliderLinkContainer.appendChild(item)
  );

  return sliderLinkContainer;
};

const activateCurrentLinkView = function activateCurrentLinkView(items, index) {
  const itemToShow = findItemToShow(items, index);
  showItem(itemToShow);
};

const goToImg = function goToImg(images, index, e) {
  const target = e.target;
  const links = target.parentElement.querySelectorAll(".slider-link-btn");
  const imgToView = findItemToShow(images, index);
  const imgToHide = itemsToHide(images, imgToView);
  changeActiveLinkBtn(links, index);
  hideAllItems(imgToHide);
  showItem(imgToView);
};

const activateAllLinkBtn = function activateAllLinkBtn(links, images) {
  links.forEach((link) =>
    link.addEventListener(
      "click",
      goToImg.bind(this, images, Number(link.getAttribute("data-key")))
    )
  );
};

const activateImgSlider = function activateImgSlider(target) {
  const imgSliderContainer = target;
  const imgSlider = target.querySelector(".img-slider");
  const imgItems = target.querySelectorAll(".img-slider .slider-item");
  addSliderNavigation(imgSlider);
  activateSliderItems(imgSlider, 0);
  imgSliderContainer.appendChild(createSliderLinks(imgSlider));
  const sliderLinkBtn = imgSliderContainer.querySelectorAll(".slider-link-btn");
  activateCurrentLinkView(sliderLinkBtn, 0);
  activateAllLinkBtn(sliderLinkBtn, imgItems);
  setInterval(viewNextImg.bind(this, imgSlider), 5000);
};

export default activateImgSlider;
