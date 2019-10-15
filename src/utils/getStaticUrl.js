export default function getStaticUrl(file) {
  return `http://localhost:${process.env.PORT}/${file}`;
}
