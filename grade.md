# Grade
HTML Code Quality: 9/10
CSS/Tailwind Code Quality: 9.5/10
Responsive Design: 9.5/10
Assignment Requirements: 10/10

Total: 38/40

## Comments

Fantastic work! I love the banner animation!

### HTML
Search for `prof comment` in individual files for specific comments.

### CSS/TailwindCSS
- Although its not causing issues here, I generally recommend against using `id` selectors in CSS. We want our CSS to be as reusable as possible and since `id` values must be unique, they go against that reusability. You've only used them on elements that are unique, so ultimately it is fine. But I would encourage you moving forward to stick to classes.
- For the footer icons, instead of making the `.footer_link` text `display: none;` you should use the screen reader only text technique to visually hide the text without removing the text from the page. Screen readers cannot read text that is `display: none;` meaning they have no context for what those links are for.

### Responsive Design
- Make sure your are using up-to-date and accurate icons in the technology section!
  - The Ai does not reflect the current logo

### Assignment Requirements
All requirements met!