export default function Card(props) {
  return (
    <article
      className={`col-span-${props.isBig ? 2 : 1} row-span-${
        props.isBig ? 2 : 1
      }`}
    >
      <img className="aspect-[3/4] object-cover" src={props.img} alt="" />
    </article>
  );
}
