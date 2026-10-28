const images = import.meta.glob("../assets/images/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export default function getImage(name) {
  return images[`../assets/images/${name}`];
}