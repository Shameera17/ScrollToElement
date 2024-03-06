export const handleClickScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};
