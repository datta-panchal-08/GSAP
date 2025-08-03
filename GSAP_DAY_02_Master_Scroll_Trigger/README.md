# 🌟 GSAP Animations with ScrollTrigger

A simple and powerful demo using **GSAP** (`gsap.from`) and the **ScrollTrigger** plugin to animate elements smoothly when they load or scroll into view.

---

## 🚀 Technologies Used

- HTML, CSS
- [GSAP](https://greensock.com/gsap/)
- [ScrollTrigger](https://greensock.com/scrolltrigger/)

---

## 🎯 What is ScrollTrigger?

`ScrollTrigger` is a **GSAP plugin** that allows you to trigger animations based on the scroll position of elements.

You can animate elements when:
- They **enter** or **leave** the viewport.
- You scroll to a **specific position** on the page.
- You want to **pin** elements or sync them with scroll progress.

### 🔧 Basic Syntax

```js
scrollTrigger: {
  trigger: "element",     // Which element to watch
  start: "top center",    // When animation should start
  end: "bottom top",      // Optional: when to end
  scrub: false,           // Optional: sync animation with scroll
  markers: true           // Shows visual scroll markers (for dev)
}
